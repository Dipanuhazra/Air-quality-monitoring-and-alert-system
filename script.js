let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 22.5726, lng: 88.3639 }, // Center map to Kolkata
        zoom: 12
    });

    fetch('/api/air_quality')
        .then(response => response.json())
        .then(data => {
            data.sensors.forEach(sensor => {
                const marker = new google.maps.Marker({
                    position: { lat: sensor.latitude, lng: sensor.longitude },
                    map: map,
                    title: `AQI: ${sensor.aqi}`
                });

                const infoWindow = new google.maps.InfoWindow({
                    content: `<h3>${sensor.location}</h3><p>AQI: ${sensor.aqi}</p>`
                });

                marker.addListener('click', () => {
                    infoWindow.open(map, marker);
                });
            });

            displayAlerts(data.alerts);
        })
        .catch(error => console.error('Error fetching air quality data:', error));
}

function displayAlerts(alerts) {
    const alertsDiv = document.getElementById('alerts');
    alertsDiv.innerHTML = alerts.map(alert => `<p>${alert}</p>`).join('');
}
