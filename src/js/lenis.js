const lenis = new Lenis({
    duration: window.innerWidth > 768 ? 1 : 0.5,
    smooth: true,
    smoothTouch: false,
    wheelMultiplier: 1,
    easing: (t) => 1 - Math.pow(1 - t, 4),
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

window.addEventListener("scroll", () => {
    lenis.raf(performance.now()); 
});
