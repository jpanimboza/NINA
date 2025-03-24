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
            onEachFeature: function(feature, layer) {
                // Agregar un evento de clic a cada característica
                layer.on('click', function(e) {
                    // Obtener la propiedad que deseas mostrar
                    var texto = feature.properties.zone; // Reemplaza 'zone' con la propiedad que deseas mostrar

                    // Mostrar el texto en un elemento HTML (puedes personalizar esto)
                    document.getElementById('texto-desplegado').textContent = 'texto_j';
                });
            }
        }).addTo(map);
    })
    .catch(error => {
        console.error('Error al cargar el GeoJSON:', error);
    });