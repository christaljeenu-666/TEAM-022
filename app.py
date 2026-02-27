import sqlite3
import urllib.request
import json
from flask import Flask, render_template, request, jsonify
import os
import urllib.parse

app = Flask(__name__)
DB_PATH = 'database.db'

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def get_coordinates(city_name):
    """Fetch lat/lon for a city using Open-Meteo Geocoding API."""
    try:
        url = f"https://geocoding-api.open-meteo.com/v1/search?name={urllib.parse.quote(city_name)}&count=1&language=en&format=json"
        with urllib.request.urlopen(url) as response:
            data = json.loads(response.read().decode())
            if data.get('results'):
                result = data['results'][0]
                return result.get('latitude'), result.get('longitude'), result.get('name')
    except Exception as e:
        print(f"Geocoding error: {e}")
    return None, None, None

def get_live_weather(lat, lon):
    """Fetch current weather for coordinates using Open-Meteo Forecast API."""
    try:
        url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true&relative_humidity_2m=true"
        # Open-Meteo doesn't give humidity in 'current_weather' summary directly in some versions, 
        # but we can get it from 'current' if we add the parameter.
        url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m"
        with urllib.request.urlopen(url) as response:
            data = json.loads(response.read().decode())
            if data.get('current'):
                current = data['current']
                return {
                    'temp': f"{current['temperature_2m']}°C",
                    'humidity': f"{current['relative_humidity_2m']}%"
                }
    except Exception as e:
        print(f"Weather API error: {e}")
    return None


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/recommend', methods=['POST'])
def get_recommendation():
    data = request.json
    crop = data.get('crop')
    soil = data.get('soil')
    season = data.get('season')
    city = data.get('city', '').lower()

    if not all([crop, soil, season]):
        return jsonify({'error': 'Missing fields'}), 400

    conn = get_db_connection()
    
    try:
        # Compatibility Rating
        compat = conn.execute('SELECT rating FROM compatibility WHERE crop = ? AND soil = ?', (crop, soil)).fetchone()
        compat_rating = compat['rating'] if compat else 'ok'
        
        # Crop Info (next, companion, irrigation)
        crop_info = conn.execute('SELECT next_crop, companion, irrigation, duration, best_soils FROM crops WHERE name = ?', (crop,)).fetchone()
        
        # Weather & Tip (Live or Fallback)
        weather_source = "Seasonal"
        live_weather = None
        
        if city:
            try:
                lat, lon, matched_name = get_coordinates(city)
                if lat and lon:
                    live_weather = get_live_weather(lat, lon)
                    if live_weather:
                        weather_source = "Live"
                        if matched_name:
                            city = matched_name
            except Exception as e:
                print(f"Weather retrieval error for {city}: {e}")

        # Database Weather (Fallback for values, always used for Tip)
        weather_info = conn.execute('SELECT temp, humidity, tip FROM seasons WHERE name = ?', (season,)).fetchone()
        
        final_temp = '—'
        final_humidity = '—'
        final_tip = '—'

        if live_weather:
            final_temp = live_weather.get('temp', '—')
            final_humidity = live_weather.get('humidity', '—')
        elif weather_info:
            final_temp = weather_info['temp']
            final_humidity = weather_info['humidity']
        
        if weather_info:
            final_tip = weather_info['tip']

        # City Lookup (Database info for crops/climate)
        city_info_row = conn.execute('SELECT climate, temp, humidity, best_crops FROM cities WHERE name = ?', (city.lower(),)).fetchone()
        if not city_info_row:
            # Fuzzy match
            all_cities = conn.execute('SELECT name, climate, temp, humidity, best_crops FROM cities').fetchall()
            for row in all_cities:
                if row['name'].lower() in city.lower() or city.lower() in row['name'].lower():
                    city_info_row = row
                    break
        
        # Best crops for soil
        soil_crops = conn.execute('SELECT crops FROM soil_best_crops WHERE soil = ?', (soil,)).fetchone()

        # Safe extraction for nested queries
        next_crop_name = crop_info['next_crop'] if crop_info else '—'
        next_crop_dur = '—'
        if next_crop_name != '—':
            dur_row = conn.execute('SELECT duration FROM crops WHERE name = ?', (next_crop_name,)).fetchone()
            next_crop_dur = dur_row['duration'] if dur_row else '—'

        companion_name = crop_info['companion'] if crop_info else '—'
        companion_dur = '—'
        if companion_name != '—':
            dur_row = conn.execute('SELECT duration FROM crops WHERE name = ?', (companion_name,)).fetchone()
            companion_dur = dur_row['duration'] if dur_row else '—'

        response = {
            'compatRating': compat_rating,
            'nextCrop': next_crop_name,
            'nextCropDuration': next_crop_dur,
            'companion': companion_name,
            'companionDuration': companion_dur,
            'irrigation': crop_info['irrigation'] if crop_info else '—',
            'bestSoil': crop_info['best_soils'] if crop_info else '—',
            'bestCropsForSoil': soil_crops['crops'] if soil_crops else '—',
            'weather': {
                'temp': final_temp,
                'humidity': final_humidity,
                'tip': final_tip,
                'source': weather_source
            },
            'cityInfo': {
                'climate': city_info_row['climate'],
                'temp': city_info_row['temp'],
                'humidity': city_info_row['humidity'],
                'bestCrops': city_info_row['best_crops']
            } if city_info_row else None
        }
    except Exception as e:
        print(f"Internal error in get_recommendation: {e}")
        return jsonify({'error': str(e)}), 500
    finally:
        conn.close()

    return jsonify(response)

@app.route('/api/long-term-plan', methods=['POST'])
def get_long_term_plan():
    data = request.json
    crop = data.get('crop')
    years = int(data.get('years', 3))
    
    if not crop:
        return jsonify({'error': 'Initial crop required'}), 400
        
    conn = get_db_connection()
    rotation_rows = conn.execute('SELECT year, crops, benefit FROM rotations WHERE initial_crop = ? ORDER BY year', (crop,)).fetchall()
    
    if not rotation_rows:
        # Fallback plan
        plan = [
            {'year': 1, 'crops': [crop, 'Legumes', 'Cover Crop'], 'benefit': 'Initial soil adjustment.'},
            {'year': 2, 'crops': ['Cereal', 'Oilseed', 'Green Manure'], 'benefit': 'Standard nutrient balance.'},
            {'year': 3, 'crops': ['Root Crop', 'Legumes'], 'benefit': 'Soil structure improvement.'}
        ]
    else:
        plan = []
        for row in rotation_rows:
            plan.append({
                'year': row['year'],
                'crops': [c.strip() for c in row['crops'].split(',')],
                'benefit': row['benefit']
            })
    
    years = max(1, min(5, years))
    extended_plan = []
    for i in range(years):
        step = plan[i % len(plan)].copy()
        step['year'] = i + 1
        # Add durations
        step['durations'] = []
        for c in step['crops']:
            dur_row = conn.execute('SELECT duration FROM crops WHERE name = ?', (c,)).fetchone()
            step['durations'].append(dur_row['duration'] if dur_row else 'Varies')
        extended_plan.append(step)
    
    conn.close()
    return jsonify({'plan': extended_plan})

@app.route('/api/companion-crop', methods=['POST'])
def get_companion_crop():
    data = request.json
    crop = data.get('crop')
    soil = data.get('soil')
    
    if not crop or not soil:
        return jsonify({'error': 'Crop and soil required'}), 400
        
    conn = get_db_connection()
    
    crop_info = conn.execute('SELECT companion FROM crops WHERE name = ?', (crop,)).fetchone()
    companion = crop_info['companion'] if crop_info else 'Legumes'
    
    benefit = f"Balances soil health and optimizes {soil} soil conditions for {crop}."
    
    # Custom rule-based overrides (kept for demo logic)
    if crop == "Rice" and soil == "Clay":
        companion = "Azolla"
        benefit = "Azolla thrives in flooded clay soils, fixing massive amounts of nitrogen for Rice."
    elif crop == "Wheat" and soil == "Alluvial":
        companion = "Mustard"
        benefit = "Mustard's deep roots break alluvial hardpans and deter pests away from Wheat."
    elif crop == "Corn" and soil in ["Red", "Sandy"]:
        companion = "Cowpea"
        benefit = "Cowpea fixes nitrogen and its broad leaves shade drought-prone sandy/red soils, retaining moisture for Corn."
    elif crop == "Cotton" and soil == "Black":
        companion = "Green Gram"
        benefit = "Green Gram matures quickly, prevents weed growth, and adds nitrogen to heavy black soils before Cotton's peak demand."

    dur_row = conn.execute('SELECT duration FROM crops WHERE name = ?', (companion,)).fetchone()
    duration = dur_row['duration'] if dur_row else '—'
    
    conn.close()
    return jsonify({
        'companion': companion,
        'benefit': benefit,
        'duration': duration
    })

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
