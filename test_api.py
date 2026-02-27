import urllib.request
import json

url = "http://127.0.0.1:5000/api/recommend"
data = json.dumps({
    "crop": "Rice",
    "soil": "Clay",
    "season": "Kharif",
    "city": "Hyderabad"
}).encode('utf-8')

req = urllib.request.Request(url, data=data, headers={'Content-Type': 'application/json'})

try:
    with urllib.request.urlopen(req) as response:
        print(f"Status: {response.getcode()}")
        print(f"Response: {response.read().decode()}")
except Exception as e:
    print(f"Error: {e}")
    if hasattr(e, 'read'):
        print(f"Error Body: {e.read().decode()}")
