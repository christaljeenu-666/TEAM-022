import requests
import json

BASE_URL = 'http://127.0.0.1:5000'

def test_recommend():
    print("Testing /api/recommend...")
    data = {
        'crop': 'Rice',
        'soil': 'Clay',
        'season': 'Kharif',
        'city': 'Delhi'
    }
    resp = requests.post(f"{BASE_URL}/api/recommend", json=data)
    if resp.status_code == 200:
        result = resp.json()
        print("Success!")
        print(f"Next Crop: {result['nextCrop']}")
        print(f"Companion: {result['companion']}")
        print(f"Weather Temp: {result['weather']['temp']}")
    else:
        print(f"Failed: {resp.status_code}")
        print(resp.text)

def test_long_term():
    print("\nTesting /api/long-term-plan...")
    data = {'crop': 'Wheat', 'years': 3}
    resp = requests.post(f"{BASE_URL}/api/long-term-plan", json=data)
    if resp.status_code == 200:
        result = resp.json()
        print("Success!")
        print(f"Plan length: {len(result['plan'])}")
        for step in result['plan']:
            print(f"Year {step['year']}: {step['crops']}")
    else:
        print(f"Failed: {resp.status_code}")
        print(resp.text)

def test_companion():
    print("\nTesting /api/companion-crop...")
    data = {'crop': 'Cotton', 'soil': 'Black'}
    resp = requests.post(f"{BASE_URL}/api/companion-crop", json=data)
    if resp.status_code == 200:
        result = resp.json()
        print("Success!")
        print(f"Companion: {result['companion']}")
        print(f"Benefit: {result['benefit']}")
    else:
        print(f"Failed: {resp.status_code}")
        print(resp.text)

if __name__ == "__main__":
    try:
        test_recommend()
        test_long_term()
        test_companion()
    except Exception as e:
        print(f"Error: {e}")
