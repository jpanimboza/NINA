var map = L.map('map').setView([0.18,-80],6);
var osmLayer = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution: 'Jonathan'}).addTo(map);
map.addLayer(osmLayer);
$.getJSON("https://jpanimboza.github.io/NINA/area.geojson",
function(data){
    L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
            if (feature.properties && feature.properties.zone) {
                layer.bindPopup(feature.properties.zone);
            }
        },
        style: function(feature) {
            // Puedes personalizar el estilo de los polígonos aquí
            return {
                fillColor: 'yellow', // Color de relleno
                color: 'red', // Color del borde
                weight: 2, // Ancho del borde
                opacity: 1,
                fillOpacity: 0.5
            };
        }
    }).addTo(map);
});