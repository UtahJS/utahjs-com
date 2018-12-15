import Meetup from './meetup';

module.exports = class MeetupList {
    constructor(...args){
        this.meetups = [];
        args.forEach((meetup) => {
            if (meetup instanceof Meetup) {
                this.meetups.push(meetup);
            } else {
                console.warn(`MeetupList class constructor accept only Meetup objects.`);
            }
        });
    }
    getWithCoordinates() {
        return this.meetups.filter((meetup) => {
            return meetup.lat && meetup.lng;
        });
    }
}