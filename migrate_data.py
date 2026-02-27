import sqlite3
import os

DB_PATH = 'database.db'

# Static Data from app.py
crop_soil_compat = {
    'Rice': {'Alluvial': 'good', 'Black': 'ok', 'Red': 'bad', 'Laterite': 'bad', 'Sandy': 'bad', 'Clay': 'good', 'Loamy': 'good'},
    'Wheat': {'Alluvial': 'good', 'Black': 'good', 'Red': 'ok', 'Laterite': 'bad', 'Sandy': 'bad', 'Clay': 'bad', 'Loamy': 'good'},
    'Corn': {'Alluvial': 'good', 'Black': 'good', 'Red': 'ok', 'Laterite': 'ok', 'Sandy': 'ok', 'Clay': 'bad', 'Loamy': 'good'},
    'Soybean': {'Alluvial': 'good', 'Black': 'good', 'Red': 'ok', 'Laterite': 'bad', 'Sandy': 'bad', 'Clay': 'ok', 'Loamy': 'good'},
    'Cotton': {'Alluvial': 'ok', 'Black': 'good', 'Red': 'ok', 'Laterite': 'bad', 'Sandy': 'bad', 'Clay': 'ok', 'Loamy': 'good'},
    'Sugarcane': {'Alluvial': 'good', 'Black': 'good', 'Red': 'ok', 'Laterite': 'bad', 'Sandy': 'bad', 'Clay': 'ok', 'Loamy': 'good'},
    'Tomato': {'Alluvial': 'good', 'Black': 'ok', 'Red': 'good', 'Laterite': 'ok', 'Sandy': 'ok', 'Clay': 'bad', 'Loamy': 'good'},
    'Potato': {'Alluvial': 'good', 'Black': 'ok', 'Red': 'good', 'Laterite': 'ok', 'Sandy': 'good', 'Clay': 'bad', 'Loamy': 'good'},
    'Onion': {'Alluvial': 'good', 'Black': 'ok', 'Red': 'good', 'Laterite': 'ok', 'Sandy': 'ok', 'Clay': 'bad', 'Loamy': 'good'},
    'Groundnut': {'Alluvial': 'ok', 'Black': 'ok', 'Red': 'good', 'Laterite': 'ok', 'Sandy': 'good', 'Clay': 'bad', 'Loamy': 'good'},
    'Mustard': {'Alluvial': 'good', 'Black': 'good', 'Red': 'ok', 'Laterite': 'bad', 'Sandy': 'ok', 'Clay': 'bad', 'Loamy': 'good'},
    'Mung Bean': {'Alluvial': 'good', 'Black': 'good', 'Red': 'good', 'Laterite': 'ok', 'Sandy': 'ok', 'Clay': 'bad', 'Loamy': 'good'},
    'Lentils': {'Alluvial': 'good', 'Black': 'good', 'Red': 'ok', 'Laterite': 'bad', 'Sandy': 'ok', 'Clay': 'bad', 'Loamy': 'good'},
    'Black Gram': {'Alluvial': 'good', 'Black': 'good', 'Red': 'ok', 'Laterite': 'bad', 'Sandy': 'ok', 'Clay': 'ok', 'Loamy': 'good'},
    'Cabbage': {'Alluvial': 'good', 'Black': 'ok', 'Red': 'ok', 'Laterite': 'bad', 'Sandy': 'ok', 'Clay': 'bad', 'Loamy': 'good'},
    'Maize': {'Alluvial': 'good', 'Black': 'good', 'Red': 'ok', 'Laterite': 'ok', 'Sandy': 'ok', 'Clay': 'bad', 'Loamy': 'good'},
    'Cucumber': {'Alluvial': 'good', 'Black': 'ok', 'Red': 'ok', 'Laterite': 'bad', 'Sandy': 'good', 'Clay': 'bad', 'Loamy': 'good'},
    'Sunflower': {'Alluvial': 'good', 'Black': 'good', 'Red': 'ok', 'Laterite': 'bad', 'Sandy': 'ok', 'Clay': 'bad', 'Loamy': 'good'},
    'Gram (Chickpea)': {'Alluvial': 'good', 'Black': 'good', 'Red': 'ok', 'Laterite': 'bad', 'Sandy': 'ok', 'Clay': 'bad', 'Loamy': 'good'},
    'Sorghum': {'Alluvial': 'good', 'Black': 'good', 'Red': 'good', 'Laterite': 'ok', 'Sandy': 'ok', 'Clay': 'ok', 'Loamy': 'good'}
}

recommendations = {
    'Rice': {'next': 'Wheat', 'companion': 'Lentils', 'irrigation': 'Reduce watering gradually. Wheat needs moderate irrigation — every 5–7 days.'},
    'Wheat': {'next': 'Mung Bean', 'companion': 'Mustard', 'irrigation': 'Mung beans need light watering. Irrigate every 4–5 days; avoid waterlogging.'},
    'Corn': {'next': 'Soybean', 'companion': 'Squash & Beans', 'irrigation': 'Soybeans prefer consistent moisture. Drip irrigation every 3–4 days.'},
    'Soybean': {'next': 'Corn', 'companion': 'Corn & Clover', 'irrigation': 'Corn requires deep watering. Irrigate every 5 days during growth.'},
    'Cotton': {'next': 'Groundnut', 'companion': 'Sorghum', 'irrigation': 'Groundnut needs moderate moisture. Irrigate every 7–10 days.'},
    'Sugarcane': {'next': 'Rice', 'companion': 'Black Gram', 'irrigation': 'Rice paddies need standing water (5–7 cm). Flood irrigation is ideal.'},
    'Tomato': {'next': 'Cabbage', 'companion': 'Basil & Carrot', 'irrigation': 'Cabbage prefers consistent moisture. Water every 4–5 days.'},
    'Potato': {'next': 'Maize', 'companion': 'Beans & Horseradish', 'irrigation': 'Maize needs deep watering during tasseling. Every 5–6 days.'},
    'Onion': {'next': 'Cucumber', 'companion': 'Carrot & Lettuce', 'irrigation': 'Cucumbers love moisture. Water daily or every 2 days.'},
    'Groundnut': {'next': 'Cotton', 'companion': 'Sunflower', 'irrigation': 'Cotton needs moderate irrigation during boll formation. Every 7–10 days.'},
    'Mustard': {'next': 'Rice', 'companion': 'Wheat', 'irrigation': 'Irrigate sparsely. Once before flowering, once at pod formation.'},
    'Mung Bean': {'next': 'Wheat', 'companion': 'Corn', 'irrigation': 'Requires very little water. Irrigate if prolonged dry spell.'},
    'Lentils': {'next': 'Rice', 'companion': 'Mustard', 'irrigation': 'Drought tolerant. Avoid waterlogging.'},
    'Black Gram': {'next': 'Wheat', 'companion': 'Sorghum', 'irrigation': 'Irrigate during flowering if dry.'},
    'Cabbage': {'next': 'Tomato', 'companion': 'Onion', 'irrigation': 'Requires constant moisture. Drip irrigation recommended.'},
    'Maize': {'next': 'Soybean', 'companion': 'Beans', 'irrigation': 'Irrigate deeply during silking and tasseling.'},
    'Cucumber': {'next': 'Cabbage', 'companion': 'Corn', 'irrigation': 'Frequent watering needed for juicy fruits.'},
    'Sunflower': {'next': 'Gram (Chickpea)', 'companion': 'Groundnut', 'irrigation': 'Drought resistant, but needs water during bud formation.'},
    'Gram (Chickpea)': {'next': 'Maize', 'companion': 'Wheat', 'irrigation': 'Requires pre-sowing irrigation and once at pod development.'},
    'Sorghum': {'next': 'Cotton', 'companion': 'Pigeon Pea', 'irrigation': 'Highly drought tolerant. Needs water during grain filling.'}
}

crop_durations = {
    'Rice': '120-150 days', 'Wheat': '120-140 days', 'Corn': '90-120 days',
    'Soybean': '100-120 days', 'Cotton': '160-180 days', 'Sugarcane': '12-18 months',
    'Tomato': '60-90 days', 'Potato': '90-120 days', 'Onion': '100-120 days',
    'Groundnut': '100-120 days', 'Mustard': '110-140 days', 'Mung Bean': '60-90 days',
    'Lentils': '110-130 days', 'Black Gram': '90-120 days', 'Cabbage': '70-100 days',
    'Maize': '90-120 days', 'Cucumber': '50-70 days', 'Sunflower': '90-110 days',
    'Gram (Chickpea)': '120-150 days', 'Sorghum': '100-120 days'
}

season_weather = {
    'Kharif': {'temp': '28–35°C', 'humidity': '70–85%', 'tip': 'Rainy season is here! Make sure water does not stay in your field for too long.'},
    'Rabi': {'temp': '12–22°C', 'humidity': '40–60%', 'tip': 'Weather will be cool and dry. Great time to grow wheat and dal crops.'},
    'Zaid': {'temp': '30–40°C', 'humidity': '25–45%', 'tip': 'Very hot days ahead! Give your plants extra water.'}
}

city_climate_db = {
    'delhi': {'climate': 'Semi-Arid', 'temp': '25–45°C', 'humidity': '30–80%', 'bestCrops': 'Wheat, Rice, Sugarcane, Mustard, Potato'},
    'mumbai': {'climate': 'Tropical Wet', 'temp': '24–35°C', 'humidity': '60–90%', 'bestCrops': 'Rice, Coconut, Mango, Sugarcane'},
    'chennai': {'climate': 'Tropical Wet & Dry', 'temp': '24–40°C', 'humidity': '55–85%', 'bestCrops': 'Rice, Sugarcane, Groundnut, Cotton'},
    'hyderabad': {'climate': 'Semi-Arid', 'temp': '20–42°C', 'humidity': '35–75%', 'bestCrops': 'Rice, Cotton, Corn, Soybean'},
    'bangalore': {'climate': 'Tropical Savanna', 'temp': '15–35°C', 'humidity': '40–80%', 'bestCrops': 'Tomato, Potato, Onion, Corn'},
    'bengaluru': {'climate': 'Tropical Savanna', 'temp': '15–35°C', 'humidity': '40–80%', 'bestCrops': 'Tomato, Potato, Onion, Corn'},
    'pune': {'climate': 'Semi-Arid', 'temp': '15–40°C', 'humidity': '30–75%', 'bestCrops': 'Sugarcane, Tomato, Onion, Soybean, Wheat'},
    'lucknow': {'climate': 'Humid Subtropical', 'temp': '10–45°C', 'humidity': '35–85%', 'bestCrops': 'Wheat, Rice, Sugarcane, Potato'},
    'jaipur': {'climate': 'Arid', 'temp': '8–45°C', 'humidity': '20–55%', 'bestCrops': 'Wheat, Mustard, Groundnut, Pearl Millet'},
    'ahmedabad': {'climate': 'Semi-Arid', 'temp': '15–45°C', 'humidity': '20–70%', 'bestCrops': 'Cotton, Groundnut, Wheat, Castor'},
    'kolkata': {'climate': 'Tropical Wet & Dry', 'temp': '18–38°C', 'humidity': '55–90%', 'bestCrops': 'Rice, Jute, Sugarcane, Potato'},
    'chandigarh': {'climate': 'Humid Subtropical', 'temp': '5–42°C', 'humidity': '30–80%', 'bestCrops': 'Wheat, Rice, Corn, Sugarcane'},
    'patna': {'climate': 'Humid Subtropical', 'temp': '10–42°C', 'humidity': '40–85%', 'bestCrops': 'Rice, Wheat, Corn, Sugarcane'},
    'london': {'climate': 'Temperate Oceanic', 'temp': '2–25°C', 'humidity': '70–85%', 'bestCrops': 'Wheat, Barley, Potato, Oats'},
}

multi_year_rotations = {
    'Rice': [
        {'year': 1, 'crops': ['Rice', 'Wheat', 'Mung Bean'], 'benefit': 'Restores Nitrogen and breaks pest cycles.'},
        {'year': 2, 'crops': ['Mustard', 'Soybean', 'Cover Crop'], 'benefit': 'Improves soil structure and organic matter.'},
        {'year': 3, 'crops': ['Sugarcane', 'Lentils'], 'benefit': 'Deep roots improve drainage; Legumes fix Nitrogen.'}
    ],
    'Wheat': [
        {'year': 1, 'crops': ['Wheat', 'Mung Bean', 'Rice'], 'benefit': 'Classic high-yield rotation.'},
        {'year': 2, 'crops': ['Gram (Chickpea)', 'Corn', 'Cover Crop'], 'benefit': 'Legume inclusion fixes soil Nitrogen.'},
        {'year': 3, 'crops': ['Cotton', 'Groundnut'], 'benefit': 'Diversifies root depth and nutrient extraction.'}
    ],
    'Corn': [
        {'year': 1, 'crops': ['Corn', 'Soybean', 'Cover Crop'], 'benefit': 'Highly efficient nutrient cycling.'},
        {'year': 2, 'crops': ['Wheat', 'Lentils', 'Rice'], 'benefit': 'Balances cereal and legume needs.'},
        {'year': 3, 'crops': ['Potato', 'Onion', 'Beans'], 'benefit': 'Intensive root crop inclusion.'}
    ],
    'Cotton': [
        {'year': 1, 'crops': ['Cotton', 'Groundnut', 'Sorghum'], 'benefit': 'Reduces soil depletion and pests.'},
        {'year': 2, 'crops': ['Wheat', 'Soybean', 'Green Manure'], 'benefit': 'Adds organic matter back to soil.'},
        {'year': 3, 'crops': ['Rice', 'Lentils'], 'benefit': 'Breaks cotton pest cycles completely.'}
    ],
    'Tomato': [
        {'year': 1, 'crops': ['Tomato', 'Cabbage', 'Beans'], 'benefit': 'Prevents soil-borne disease buildup.'},
        {'year': 2, 'crops': ['Onion', 'Potato', 'Carrot'], 'benefit': 'Diversifies nutrient uptake from different layers.'},
        {'year': 3, 'crops': ['Corn', 'Cover Crop', 'Peas'], 'benefit': 'Restores soil structure and Nitrogen.'}
    ],
    'Potato': [
        {'year': 1, 'crops': ['Potato', 'Corn', 'Lentils'], 'benefit': 'Breaks pest cycles and restores nitrogen.'},
        {'year': 2, 'crops': ['Wheat', 'Soybean', 'Green Manure'], 'benefit': 'Improves soil organic matter.'},
        {'year': 3, 'crops': ['Onion', 'Beans'], 'benefit': 'Maintains soil fertility.'}
    ],
    'Onion': [
        {'year': 1, 'crops': ['Onion', 'Cucumber', 'Peas'], 'benefit': 'Reduces soil-borne pathogens.'},
        {'year': 2, 'crops': ['Tomato', 'Carrot', 'Clover'], 'benefit': 'Balances nutrient demand.'},
        {'year': 3, 'crops': ['Corn', 'Beans'], 'benefit': 'Enhances soil structure.'}
    ],
    'Groundnut': [
        {'year': 1, 'crops': ['Groundnut', 'Cotton', 'Sorghum'], 'benefit': 'Fixes nitrogen and reduces pests.'},
        {'year': 2, 'crops': ['Wheat', 'Mung Bean', 'Rice'], 'benefit': 'Restores nutrient balance.'},
        {'year': 3, 'crops': ['Sugarcane', 'Legumes'], 'benefit': 'Deep roots improve soil drainage.'}
    ],
    'Sugarcane': [
        {'year': 1, 'crops': ['Sugarcane', 'Rice', 'Black Gram'], 'benefit': 'Breaks the monoculture cycle.'},
        {'year': 2, 'crops': ['Wheat', 'Soybean', 'Cover Crop'], 'benefit': 'Restores soil structure.'},
        {'year': 3, 'crops': ['Cotton', 'Groundnut'], 'benefit': 'Improves drainage and aeration.'}
    ],
    'Mustard': [
        {'year': 1, 'crops': ['Mustard', 'Mung Bean', 'Rice'], 'benefit': 'Pest cycle disruption.'},
        {'year': 2, 'crops': ['Wheat', 'Legumes'], 'benefit': 'Nitrogen fixation.'},
        {'year': 3, 'crops': ['Corn', 'Cover Crop'], 'benefit': 'Soil structure maintenance.'}
    ],
    'Mung Bean': [
        {'year': 1, 'crops': ['Mung Bean', 'Wheat', 'Rice'], 'benefit': 'Rapid nitrogen fixation.'},
        {'year': 2, 'crops': ['Cotton', 'Sorghum'], 'benefit': 'Deep root soil conditioning.'},
        {'year': 3, 'crops': ['Mustard', 'Soybean'], 'benefit': 'Pest control and nutrient balance.'}
    ],
    'Lentils': [
        {'year': 1, 'crops': ['Lentils', 'Rice', 'Wheat'], 'benefit': 'Classic winter legume rotation.'},
        {'year': 2, 'crops': ['Maize', 'Soybean'], 'benefit': 'Weed suppression.'},
        {'year': 3, 'crops': ['Sunflower', 'Gram (Chickpea)'], 'benefit': 'Drought resistance cycling.'}
    ],
    'Black Gram': [
        {'year': 1, 'crops': ['Black Gram', 'Wheat', 'Rice'], 'benefit': 'Improves soil physical properties.'},
        {'year': 2, 'crops': ['Cotton', 'Groundnut'], 'benefit': 'Breaks disease cycles.'},
        {'year': 3, 'crops': ['Sorghum', 'Cover Crop'], 'benefit': 'Enhances organic matter.'}
    ],
    'Cabbage': [
        {'year': 1, 'crops': ['Cabbage', 'Onion', 'Tomato'], 'benefit': 'Nutrient demand balancing.'},
        {'year': 2, 'crops': ['Legumes', 'Corn'], 'benefit': 'Nitrogen replenishment.'},
        {'year': 3, 'crops': ['Potato', 'Beans'], 'benefit': 'Soil aeration.'}
    ],
    'Maize': [
        {'year': 1, 'crops': ['Maize', 'Soybean', 'Cover Crop'], 'benefit': 'Optimal nitrogen utilization.'},
        {'year': 2, 'crops': ['Wheat', 'Mung Bean'], 'benefit': 'Disease cycle breaking.'},
        {'year': 3, 'crops': ['Cotton', 'Groundnut'], 'benefit': 'Deep root aeration.'}
    ],
    'Cucumber': [
        {'year': 1, 'crops': ['Cucumber', 'Beans', 'Cabbage'], 'benefit': 'Shallow root cycling.'},
        {'year': 2, 'crops': ['Tomato', 'Onion'], 'benefit': 'Pest disruption.'},
        {'year': 3, 'crops': ['Corn', 'Legumes'], 'benefit': 'Structural soil recovery.'}
    ],
    'Sunflower': [
        {'year': 1, 'crops': ['Sunflower', 'Gram (Chickpea)', 'Maize'], 'benefit': 'Deep soil nutrient mining.'},
        {'year': 2, 'crops': ['Wheat', 'Mung Bean'], 'benefit': 'Restoring surface nutrients.'},
        {'year': 3, 'crops': ['Sorghum', 'Legumes'], 'benefit': 'Drought resilience.'}
    ],
    'Gram (Chickpea)': [
        {'year': 1, 'crops': ['Gram (Chickpea)', 'Maize', 'Rice'], 'benefit': 'Nitrogen fixing for cereals.'},
        {'year': 2, 'crops': ['Cotton', 'Sorghum'], 'benefit': 'Disease break.'},
        {'year': 3, 'crops': ['Wheat', 'Soybean'], 'benefit': 'Continuous soil cover.'}
    ],
    'Sorghum': [
        {'year': 1, 'crops': ['Sorghum', 'Cotton', 'Groundnut'], 'benefit': 'Water-use efficiency.'},
        {'year': 2, 'crops': ['Wheat', 'Black Gram'], 'benefit': 'Nutrient replenishment.'},
        {'year': 3, 'crops': ['Sunflower', 'Legumes'], 'benefit': 'Organic matter building.'}
    ]
}

best_soil_for_crop = {
    'Rice': 'Alluvial, Clay, Loamy', 'Wheat': 'Alluvial, Black, Loamy', 'Corn': 'Alluvial, Black, Loamy',
    'Soybean': 'Alluvial, Black, Loamy', 'Cotton': 'Black, Loamy', 'Sugarcane': 'Alluvial, Black, Loamy',
    'Tomato': 'Alluvial, Red, Loamy', 'Potato': 'Alluvial, Red, Sandy, Loamy', 'Onion': 'Alluvial, Red, Loamy',
    'Groundnut': 'Red, Sandy, Loamy',
    'Mustard': 'Alluvial, Black, Loamy', 'Mung Bean': 'Alluvial, Red, Loamy', 'Lentils': 'Alluvial, Black, Loamy',
    'Black Gram': 'Alluvial, Black, Loamy', 'Cabbage': 'Alluvial, Loamy', 'Maize': 'Alluvial, Black, Loamy',
    'Cucumber': 'Alluvial, Sandy, Loamy', 'Sunflower': 'Alluvial, Black, Loamy', 'Gram (Chickpea)': 'Alluvial, Black, Loamy',
    'Sorghum': 'Alluvial, Black, Red, Loamy'
}

best_crops_for_soil = {
    'Alluvial': 'Rice, Wheat, Corn, Sugarcane, Potato', 'Black': 'Cotton, Wheat, Soybean, Corn, Sugarcane',
    'Red': 'Tomato, Potato, Onion, Groundnut', 'Laterite': 'Tomato, Corn, Potato',
    'Sandy': 'Potato, Groundnut', 'Clay': 'Rice', 'Loamy': 'Almost all crops — Loamy is the best!'
}

def setup_db():
    if os.path.exists(DB_PATH):
        os.remove(DB_PATH)
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Create Tables
    cursor.execute('''CREATE TABLE crops (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT UNIQUE,
        next_crop TEXT,
        companion TEXT,
        irrigation TEXT,
        duration TEXT,
        best_soils TEXT
    )''')

    cursor.execute('''CREATE TABLE compatibility (
        crop TEXT,
        soil TEXT,
        rating TEXT,
        PRIMARY KEY (crop, soil)
    )''')

    cursor.execute('''CREATE TABLE seasons (
        name TEXT PRIMARY KEY,
        temp TEXT,
        humidity TEXT,
        tip TEXT
    )''')

    cursor.execute('''CREATE TABLE cities (
        name TEXT PRIMARY KEY,
        climate TEXT,
        temp TEXT,
        humidity TEXT,
        best_crops TEXT
    )''')

    cursor.execute('''CREATE TABLE rotations (
        initial_crop TEXT,
        year INTEGER,
        crops TEXT,
        benefit TEXT,
        PRIMARY KEY (initial_crop, year)
    )''')

    cursor.execute('''CREATE TABLE soil_best_crops (
        soil TEXT PRIMARY KEY,
        crops TEXT
    )''')

    # Insert Data
    for name, info in recommendations.items():
        dur = crop_durations.get(name, '—')
        best_s = best_soil_for_crop.get(name, '—')
        cursor.execute('INSERT INTO crops (name, next_crop, companion, irrigation, duration, best_soils) VALUES (?, ?, ?, ?, ?, ?)',
                       (name, info['next'], info['companion'], info['irrigation'], dur, best_s))

    for crop, soils in crop_soil_compat.items():
        for soil, rating in soils.items():
            cursor.execute('INSERT INTO compatibility (crop, soil, rating) VALUES (?, ?, ?)', (crop, soil, rating))

    for name, info in season_weather.items():
        cursor.execute('INSERT INTO seasons (name, temp, humidity, tip) VALUES (?, ?, ?, ?)',
                       (name, info['temp'], info['humidity'], info['tip']))

    for name, info in city_climate_db.items():
        cursor.execute('INSERT INTO cities (name, climate, temp, humidity, best_crops) VALUES (?, ?, ?, ?, ?)',
                       (name, info['climate'], info['temp'], info['humidity'], info['bestCrops']))

    for crop, steps in multi_year_rotations.items():
        for step in steps:
            cursor.execute('INSERT INTO rotations (initial_crop, year, crops, benefit) VALUES (?, ?, ?, ?)',
                           (crop, step['year'], ', '.join(step['crops']), step['benefit']))

    for soil, crops in best_crops_for_soil.items():
        cursor.execute('INSERT INTO soil_best_crops (soil, crops) VALUES (?, ?)', (soil, crops))

    conn.commit()
    conn.close()
    print(f"Database {DB_PATH} created and populated successfully.")

if __name__ == "__main__":
    setup_db()
