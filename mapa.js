var map = L.map('map').setView([-1,-80],6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// URL del archivo GeoJSON externo
var geojsonUrl = 'https://jpanimboza.github.io/NINA/area.geojson'; // Reemplaza con la URL de tu archivo

// Cargar el archivo GeoJSON
fetch(geojsonUrl)
    .then(response => response.json())
    .then(data => {
        // Agregar la capa GeoJSON al mapa
        L.geoJSON(data, {
            style: function(feature) {
                // Estilo para los polígonos (puedes personalizarlo)
                return {
                    fillColor: 'yellow',
                    color: 'red',
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 0.5
                };
            },
            onEachFeature: function(feature, layer) {
                // Agregar ventanas emergentes (popups) si las propiedades existen
                if (feature.properties && feature.properties.zone) { // Usamos 'zone' en lugar de 'nombre'
                    layer.bindPopup(feature.properties.zone);
                }
                layer.on('click', function(e) {
                    // Obtener la propiedad que deseas mostrar
                    var texto = feature.properties.zone; // Reemplaza 'zone' con la propiedad que deseas mostrar

                    // Mostrar el texto en un elemento HTML (puedes personalizar esto)
                    document.getElementById('texto-desplegado').textContent = texto;
                });
            }
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error al cargar el GeoJSON:', error);
    });