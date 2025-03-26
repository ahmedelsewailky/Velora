const swiperWrapper = document.querySelector(".brand-slider .swiper-wrapper");
const slides = Array.from(swiperWrapper.children);

while (swiperWrapper.children.length < 20) {
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        swiperWrapper.appendChild(clone);
    });
}

// Testimonials Swiper
var swiper = new Swiper(".testimonials .swiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    speed: 700,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    effect: "fade", // تغيير التأثير إلى "fade"
    fadeEffect: {
        crossFade: true, // يجعل الشرائح تتلاشى بسلاسة
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 1,
        }
    }
});
