import GenericClass from './abstract/generic-class';

const Meetup = class Meetup extends GenericClass {
    constructor(...args){
        super(...args);
    }
    getMapboxCoords() {
        return [this.lng, this.lat];
    }
    createMarkerDOMElement(className = `mapbox__marker bg-img bg-img--cover`) {
        let el = document.createElement('div');
        el.className = className;
        el.style.backgroundImage = `url(${ Meetup.backgroundPath }/${ this.icon }.png)`;
        return el;
    }
}
Meetup.fields = [`lat`, `lng`, `name`, `icon`];
Meetup.backgroundPath = `/assets/img/sisters`;

export default Meetup;