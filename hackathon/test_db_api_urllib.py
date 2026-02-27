import urllib.request
import json

BASE_URL = 'http://127.0.0.1:5000'

def test_recommend():
    print("Testing /api/recommend...")
    data = json.dumps({
        'crop': 'Rice',
        'soil': 'Clay',
        'season': 'Kharif',
        'city': 'Delhi'
    }).encode('utf-8')
    req = urllib.request.Request(f"{BASE_URL}/api/recommend", data=data, headers={'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read().decode('utf-8'))
            print("Success!")
            print(f"Next Crop: {result['nextCrop']}")
            print(f"Companion: {result['companion']}")
            print(f"Weather Temp: {result['weather']['temp']}")
    except Exception as e:
        print(f"Failed: {e}")

def test_long_term():
    print("\nTesting /api/long-term-plan...")
    data = json.dumps({'crop': 'Wheat', 'years': 3}).encode('utf-8')
    req = urllib.request.Request(f"{BASE_URL}/api/long-term-plan", data=data, headers={'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read().decode('utf-8'))
            print("Success!")
            print(f"Plan length: {len(result['plan'])}")
            for step in result['plan']:
                print(f"Year {step['year']}: {step['crops']}")
    except Exception as e:
        print(f"Failed: {e}")

def test_companion():
    print("\nTesting /api/companion-crop...")
    data = json.dumps({'crop': 'Cotton', 'soil': 'Black'}).encode('utf-8')
    req = urllib.request.Request(f"{BASE_URL}/api/companion-crop", data=data, headers={'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read().decode('utf-8'))
            print("Success!")
            print(f"Companion: {result['companion']}")
            print(f"Benefit: {result['benefit']}")
    except Exception as e:
        print(f"Failed: {e}")

if __name__ == "__main__":
    test_recommend()
    test_long_term()
    test_companion()
