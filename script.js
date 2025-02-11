// Here's my Mapbox access token (I replaced it with my own token)
mapboxgl.accessToken = 'your-access-token-here'; // Replace this with my actual access token

// I’m setting up the map with some basic settings
const map = new mapboxgl.Map({
    container: 'my-map', // This is where the map will be displayed
    style: 'mapbox://styles/your-username/your-style-id', // My custom Mapbox style
    center: [-79.39, 43.66], // I chose Toronto as the center of my map
    zoom: 12 // This zoom level feels just right for the area I'm showcasing
});

// After the map loads, I add data and layers
map.on('load', function () {
    // First, I add my GeoJSON data source (it defines the yoga area boundary)
    map.addSource('yoga-area', {
        type: 'geojson', // I'm working with GeoJSON data
        data: 'https://example.com/geojson-file.geojson' // This is the link to my GeoJSON file
    });

    // Then, I add a layer to visualize the yoga area boundary
    map.addLayer({
        id: 'yoga-boundary', // A unique ID for this layer
        type: 'line', // I'm using a line to show the boundary
        source: 'yoga-area', // This connects the layer to my GeoJSON source
        paint: {
            'line-width': 4, // A thicker line makes it more visible
            'line-color': '#FF0000' // I'm using red for the boundary to make it stand out
        }
    });

    // I added this hover effect to make the map more interactive
    map.on('mouseenter', 'yoga-boundary', () => {
        map.getCanvas().style.cursor = 'pointer'; // Show a pointer when hovering over the boundary
    });

    map.on('mouseleave', 'yoga-boundary', () => {
        map.getCanvas().style.cursor = ''; // Reset the cursor to default when not hovering
    });
});










