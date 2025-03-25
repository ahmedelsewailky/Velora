$(function () {
    "use strict";

    /**
     * Initializes Bootstrap tooltips.
     */
    $("[data-bs-toggle='tooltip']").tooltip({
        trigger: "hover",
        placement: "bottom"
    });

    /**
     * Handles mouse movement to create a parallax effect at @page index.html [Hero Section].
     * Elements with the class "abs" will move based on cursor position.
     */
    $(document).mousemove(function (event) {
        let x = event.clientX / window.innerWidth;
        let y = event.clientY / window.innerHeight;

        $(".parallax-effect").each(function () {
            let speed = $(this).data("speed");
            let moveX = (x - 0.5) * speed * 10;
            let moveY = (y - 0.5) * speed * 10;

            $(this).css("transform", `translate(${moveX}px, ${moveY}px)`);
        });
    });

    /**
     * Manages multi-level dropdowns.
     * Allows toggling nested dropdowns without closing the parent menu.
     */
    $(".dropdown-menu .dropdown-toggle").on("click", function (e) {
        e.stopPropagation();
        $(this).next(".dropdown-menu").addClass("show");
    });

    /**
     * Handles back button functionality inside dropdowns.
     * Closes only the last opened submenu.
     */
    $(".btn-back").on("click", function (e) {
        e.stopPropagation();
        $(".dropdown-menu.show").last().removeClass("show");
    });

});

/**
 * Ensures an infinite brand slider effect.
 * Duplicates brand slides if needed to maintain a seamless loop.
 */
const swiperWrapper = document.querySelector(".brand-slider .swiper-wrapper");
const slides = Array.from(swiperWrapper.children);

while (swiperWrapper.children.length < 20) {
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        swiperWrapper.appendChild(clone);
    });
}

/**
 * Initializes the Swiper.js brand slider.
 * Enables smooth, infinite scrolling from right to left.
 */
const brands = new Swiper(".brand-slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    loopAdditionalSlides: 5, // Ensures seamless looping
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    freeMode: true,
    freeModeMomentum: false,
    allowTouchMove: false,
    rtl: true,
});


document.addEventListener("DOMContentLoaded", function () {
    const odometers = document.querySelectorAll(".odometer");

    odometers.forEach(odometer => {
        let finalValue = odometer.dataset.value;
        setTimeout(() => {
            odometer.innerHTML = finalValue;
        }, 500);
    });
});
