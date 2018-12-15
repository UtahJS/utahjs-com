const scrollingClass = `scrolling`;

module.exports = function() {

    const current = window.location.protocol + "//" + window.location.host + window.location.pathname;

    document.querySelectorAll('a').forEach((link) => {
        if (link.href && link.href.match(`^${current}$|^${current}#`)){
            link.addEventListener('click', function(event){
                event.preventDefault();
                let htmlClasses = document.documentElement.classList;
                if (htmlClasses.contains(scrollingClass)) {
                    return;
                }
                let target = /\#(.*)/.exec(link.href);
                target = target ? document.querySelector(target[0]) : document.querySelector('body');
                if (target) {
                    htmlClasses.add(scrollingClass);
                    smoothScroll(target, 700, () => {
                        htmlClasses.remove(scrollingClass);
                    });
                }
            });
        }
    });
};