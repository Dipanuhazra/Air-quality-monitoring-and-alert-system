from flask import Flask, jsonify
import random

app = Flask(__name__)

# Dummy data for air quality sensors
sensors_data = [
    {'location': 'Central Kolkata', 'latitude': 22.5726, 'longitude': 88.3639, 'aqi': random.randint(50, 200)},
    {'location': 'North Kolkata', 'latitude': 22.6231, 'longitude': 88.4045, 'aqi': random.randint(50, 200)},
    {'location': 'South Kolkata', 'latitude': 22.4951, 'longitude': 88.3247, 'aqi': random.randint(50, 200)},
    {'location': 'East Kolkata', 'latitude': 22.5667, 'longitude': 88.4173, 'aqi': random.randint(50, 200)},
    {'location': 'West Kolkata', 'latitude': 22.5869, 'longitude': 88.3000, 'aqi': random.randint(50, 200)},
]

@app.route('/api/air_quality', methods=['GET'])
def get_air_quality():
    alerts = []
    for sensor in sensors_data:
        if sensor['aqi'] > 150:
            alerts.append(f"High pollution alert at {sensor['location']}. AQI: {sensor['aqi']}")

    response = {
        'sensors': sensors_data,
        'alerts': alerts
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
