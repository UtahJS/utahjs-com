import ResolutionChecker from '../classes/resolution-checker';
import mapboxgl from 'mapbox-gl';

const meetupsMapContainer = `#meetups-map .mapbox__canvas > div`;

module.exports = () => {

    // Do not run script if mobile.
    if (ResolutionChecker.isMobile()){
        return;
    }

    // Set public mapbox key.
    mapboxgl.accessToken = require('./../settings/secrets/mapbox-token');

    // Craete a map with default settings and custom modifiers.
    let map = new mapboxgl.Map(
        Object.assign(
            require(`./../settings/map-default`), {
            container: document.querySelector(meetupsMapContainer),
        })
    );

    // Add controls.
    map.addControl(new mapboxgl.NavigationControl({ showCompass: false, }));

    // Import meetups list and initialize map bounds.
    const meetups = require(`../settings/meetups`).getWithCoordinates();
    let bounds = new mapboxgl.LngLatBounds(); 

    // Expand bounds and put meetup on a map.
    meetups.forEach((meetup) => {
        let coords = meetup.getMapboxCoords();
        new mapboxgl.Marker(meetup.createMarkerDOMElement()).setLngLat(coords).addTo(map);
        bounds.extend(coords);
    });
    map.fitBounds(bounds, { padding: 70 });
}