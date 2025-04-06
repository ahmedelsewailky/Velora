document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 992) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'wow-animated',
            offset: 100,
            mobile: true,
            live: true,
            resetAnimation: true
        });
    }

    wow.init();
});
