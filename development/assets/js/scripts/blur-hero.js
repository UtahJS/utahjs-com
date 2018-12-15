import ResolutionChecker from '../classes/resolution-checker';

const ratio = 0.05;
const idleOffset = 30;
const maxBlur = 5;
const hero = document.querySelector(`#main-hero > figure`);

module.exports = () => {

    // Check and assume if mobile, tablet, etc.
    if (ResolutionChecker.isMobile()){
        return;
    }

    // Create handler function...
    const handle = () => {
        let blur = Math.round((window.scrollY - idleOffset) * ratio);
        hero.style.filter = `blur(${ blur > 0 ? (blur > maxBlur ? maxBlur : blur) : 0 }px)`;
    };

    // ...and apply it.
    window.addEventListener(`scroll`, handle);
    handle();
}