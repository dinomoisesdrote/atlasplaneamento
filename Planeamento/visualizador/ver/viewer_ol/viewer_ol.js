// document.addEventListener('DOMContentLoaded', function() {
//     var map = new ol.Map({
//         target: 'map',
//         layers: [
//             new ol.layer.Tile({
//                 source: new ol.source.OSM()
//             })
//         ],
//         view: new ol.View({
//             center: ol.proj.fromLonLat([0, 0]),
//             zoom: 2
//         })
//     });



    

//     // Adding click events to images
//     document.querySelectorAll('.gallery-image').forEach(function(image) {
//         image.addEventListener('click', function() {
//             var lat = parseFloat(this.dataset.lat);
//             var lon = parseFloat(this.dataset.lon);

//             map.getView().setCenter(ol.proj.fromLonLat([lon, lat]));
//             var marker = new ol.Feature({
//                 geometry: new ol.geom.Point(ol.proj.fromLonLat([lon, lat]))
//             });
//             var vectorSource = new ol.source.Vector({
//                 features: [marker]
//             });
//             var vectorLayer = new ol.layer.Vector({
//                 source: vectorSource
//             });

//             map.addLayer(vectorLayer);
//         });
//     });

//     // Adding images to the map
//     // Example array of photos
//     var photos = [
//         { src: 'https://i.postimg.cc/rpH6xZw5/rui_carita.png', alt: 'Foto 1 - Latitude, Longitude', 'lat: 32.6503', 'lon: -16.908236' },
//         { src: 'https://i.postimg.cc/mrkfcWBb/rui_carita_1.png', alt: 'Foto 2 - Latitude, Longitude', lat: 41.1579, lon: -8.6291 },
//         { src: 'url_da_foto_1.jpg', alt: 'Foto 1 - Latitude, Longitude', lat: 38.7223, lon: -9.1393 },
//         { src: 'url_da_foto_2.jpg', alt: 'Foto 2 - Latitude, Longitude', lat: 41.1579, lon: -8.6291 },
//         { src: 'url_da_foto_1.jpg', alt: 'Foto 1 - Latitude, Longitude', lat: 38.7223, lon: -9.1393 },
//         { src: 'url_da_foto_2.jpg', alt: 'Foto 2 - Latitude, Longitude', lat: 41.1579, lon: -8.6291 },
//         { src: 'url_da_foto_1.jpg', alt: 'Foto 1 - Latitude, Longitude', lat: 38.7223, lon: -9.1393 },
//         { src: 'url_da_foto_2.jpg', alt: 'Foto 2 - Latitude, Longitude', lat: 41.1579, lon: -8.6291 },
//         { src: 'url_da_foto_1.jpg', alt: 'Foto 1 - Latitude, Longitude', lat: 38.7223, lon: -9.1393 },
//         { src: 'url_da_foto_2.jpg', alt: 'Foto 2 - Latitude, Longitude', lat: 41.1579, lon: -8.6291 },
//         { src: 'url_da_foto_1.jpg', alt: 'Foto 1 - Latitude, Longitude', lat: 38.7223, lon: -9.1393 },
//         { src: 'url_da_foto_2.jpg', alt: 'Foto 2 - Latitude, Longitude', lat: 41.1579, lon: -8.6291 }, 
//         { src: 'url_da_foto_1.jpg', alt: 'Foto 1 - Latitude, Longitude', lat: 38.7223, lon: -9.1393 },
//         { src: 'url_da_foto_2.jpg', alt: 'Foto 2 - Latitude, Longitude', lat: 41.1579, lon: -8.6291 },
//         { src: 'url_da_foto_1.jpg', alt: 'Foto 1 - Latitude, Longitude', lat: 38.7223, lon: -9.1393 },
//         { src: 'url_da_foto_2.jpg', alt: 'Foto 2 - Latitude, Longitude', lat: 41.1579, lon: -8.6291 },
//         { src: 'url_da_foto_1.jpg', alt: 'Foto 1 - Latitude, Longitude', lat: 38.7223, lon: -9.1393 },
//         { src: 'url_da_foto_2.jpg', alt: 'Foto 2 - Latitude, Longitude', lat: 41.1579, lon: -8.6291 },
//         { src: 'url_da_foto_1.jpg', alt: 'Foto 1 - Latitude, Longitude', lat: 38.7223, lon: -9.1393 },
//         { src: 'url_da_foto_2.jpg', alt: 'Foto 2 - Latitude, Longitude', lat: 41.1579, lon: -8.6291 },
//         { src: 'url_da_foto_1.jpg', alt: 'Foto 1 - Latitude, Longitude', lat: 38.7223, lon: -9.1393 },
//         { src: 'url_da_foto_2.jpg', alt: 'Foto 2 - Latitude, Longitude', lat: 41.1579, lon: -8.6291 },
//         // Add more photos as needed
//     ];

//     // Create a container for the image gallery
//     var imageGallery = document.getElementById('image-gallery');

//     // Loop through the photos array and create an image element for each photo
//     photos.forEach(function(photo) {
//         var img = document.createElement('img');
//         img.src = photo.src;
//         img.alt = photo.alt;
//         img.dataset.lat = photo.lat;
//         img.dataset.lon = photo.lon;
//         img.classList.add('gallery-image');
//         imageGallery.appendChild(img);
//     });

//     // Coordinates of Rua Augusta (fictional example)
//     var ruaAugustaCoords = [
//         ol.proj.fromLonLat([-46.6487, -23.5509]), // Starting point
//         ol.proj.fromLonLat([-46.6490, -23.5512]), // Second point
//         // Continue adding points as needed
//     ];
// });




document.addEventListener('DOMContentLoaded', function() {
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([0, 0]),
            zoom: 2
        })
    });

    // Função para adicionar um único marcador ao mapa
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

    // Coordenadas das ruas (exemplo fictício)
    var ruaCoordinates = [
        [ol.proj.fromLonLat([ -16.908236 , 32.6503, ])], // Primeira rua
        [ol.proj.fromLonLat([-46.6490, -23.5512])], // Segunda rua
        // Continue adicionando as coordenadas das outras 48 ruas aqui
    ];

    // Adicionando os marcadores das ruas ao mapa
    ruaCoordinates.forEach(function(coord) {
        addMarker(coord[1], coord[0]); // Nota: as coordenadas são [longitude, latitude]
    });

    // Adicionando imagens à galeria (exemplo)
    var photos = [
        // Suas imagens aqui
    ];

    var imageGallery = document.getElementById('image-gallery');
    photos.forEach(function(photo) {
        var img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.alt;
        img.dataset.lat = photo.lat;
        img.dataset.lon = photo.lon;
        img.classList.add('gallery-image');
        imageGallery.appendChild(img);
    });

    // Adicionando eventos de clique às imagens
    document.querySelectorAll('.gallery-image').forEach(function(image) {
        image.addEventListener('click', function() {
            var lat = parseFloat(this.dataset.lat);
            var lon = parseFloat(this.dataset.lon);

            map.getView().setCenter(ol.proj.fromLonLat([lon, lat]));
            addMarker(lat, lon);
        });
    });
});
