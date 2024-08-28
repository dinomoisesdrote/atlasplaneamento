

// JavaScript code to initialize the map and handle image clicks
document.addEventListener('DOMContentLoaded', function() {
    const view = new ol.View({
        center: ol.proj.fromLonLat([0, 0]),
        zoom: 6
    });

    const center = ol.proj.fromLonLat([0, 0]);

    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: view
    });

    //Marcador de localização
    function addMarker(lat, lon) {
        var marker = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat]))
        });
        var vectorSource = new ol.source.Vector({
            features: [marker]
        });
        var vectorLayer = new ol.layer.Vector({
            source: vectorSource
        });
        map.addLayer(vectorLayer);
    }

    // Add click event to images
    document.querySelectorAll('.coluna-fotos img').forEach(function(image) {
        image.addEventListener('click', function() {
            var lat = parseFloat(this.dataset.lat);
            var lon = parseFloat(this.dataset.lon);
            var mapElement = document.getElementById('map');

            // Toggle the map's visibility
            if (mapElement.classList.contains('visible')) {
                mapElement.classList.remove('visible'); // Hide the map
                mapElement.classList.add('map-hidden');
            } else {
                mapElement.classList.remove('map-hidden'); // Show the map
                mapElement.classList.add('visible');

                // Center the map, add a marker, and zoom in
                const newCenter = ol.proj.fromLonLat([lon, lat]);
                view.animate({
                    center: newCenter,
                    zoom: 18, // Adjust this value for desired zoom level
                    duration: 1000 // Animation duration in milliseconds
                });
                addMarker(lat, lon);
            }
        });
    });
});
