module.exports = {

    // Default light map.
    style: `mapbox://styles/mapbox/light-v9`,

    // Zoom settings.
    zoom: 5,
    boxZoom: false,
    scrollZoom: false,
    touchZoomRotate: false,

    // Pitch settings.
    pitch: 0,
    pitchWithRotate: false,
    dragRotate: false,
    
    // Limit map to  fit US bounds.
    maxBounds: [
        [-126.7844079, 22.7433195,],
        [-64.9513812, 51.3457868,],
    ],

    // Utah state center.
    center: [-111.950684, 39.419220],
};