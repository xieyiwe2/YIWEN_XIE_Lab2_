// Here's my Mapbox access token (I replaced it with my own token)
mapboxgl.accessToken = 'pk.eyJ1IjoieGlleWl3ZTIiLCJhIjoiY201bzlrMzF4MGttMTJub20xODk5dGxydiJ9._U9znMhQu-2lUtT3MidkQg'; 

// I’m setting up the map with some basic settings
const map = new mapboxgl.Map({
    container: 'my-map', // This is where the map will be displayed
    style: 'mapbox://styles/xieyiwe2/cm6zgcakx00rq01sbgd1ffmha', // My custom Mapbox style
    center: [-79.39, 43.66], // I chose Toronto as the center of my map
    zoom: 12 // This zoom level feels just right for the area I'm showcasing
});

// After the map loads, I add data and layers
map.on('load', function () {
    // First, I add my GeoJSON data source (it defines the yoga area boundary)
    map.addSource('yoga-area', {
        type: 'geojson', // I'm working with GeoJSON data
        data: 'https://raw.githubusercontent.com/xieyiwe2/YIWEN_XIE_Lab2/refs/heads/main/map.geojson' // This is the link to my GeoJSON file
    });

    // Then, I add a layer to visualize the yoga area boundary
    map.addLayer({
        id: 'yoga-boundary', // A unique ID for this layer
        type: 'line', // I'm using a line to show the boundary
        source: 'yoga-area', // This connects the layer to my GeoJSON source
        paint: {
            'line-width': 4, // A thicker line makes it more visible
            'line-color': 'maroon' // I'm using red for the boundary to make it stand out
        }
    });