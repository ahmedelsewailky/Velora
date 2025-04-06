$(function () {
    const $backToTop = $('.back-to-top');
    const scrollTrigger = 300;
    let scrollTimeout;

    $(window).on('scroll', function () {
        if (scrollTimeout) clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > scrollTrigger) {
                $backToTop.fadeIn();
            } else {
                $backToTop.fadeOut();
            }
        }, 100);
    });

    $backToTop.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
});
