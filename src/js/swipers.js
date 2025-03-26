
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