window.smoothScroll = require("smoothscroll");

(() => {

    const init = () => {
        require('./scripts/internal-links')();
        require('./scripts/blur-hero')();
        require('./scripts/meetups-map')();
    };

    if(['interactive', 'complete'].indexOf(document.readyState) >= 0) {
        init();
    } else {
        document.addEventListener("DOMContentLoaded", init);
    }

})();
