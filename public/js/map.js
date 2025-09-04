    // mapboxgl.accessTokenccessToken = mapToken;
    // const map = new mapboxgl.Map({
    //     container: 'map', // container ID
    //     style: "mapbox://styles/mapbox/streets-v12",
    //     center: [77.2090, 28.6139], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    //     zoom: 9 // starting zoom
    // });

    script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.js';
    script.onload = function() {
    mapboxgl.accessToken = 'invalid_token';
    map = new mapboxgl.Map({
        container: 'mapsection', // container ID
        style: 'mapbox://styles/mapbox/streets-v11' // style URL
    });
    map.on('error', (response) => {
        alert(response.error.message)
    });
}