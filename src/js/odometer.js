document.addEventListener("DOMContentLoaded", function () {
    const odometers = document.querySelectorAll(".odometer");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let odometer = entry.target;
                let finalValue = odometer.dataset.value;

                setTimeout(() => {
                    odometer.innerHTML = finalValue;
                }, 200);

                observer.unobserve(odometer);
            }
        });
    }, { threshold: 0.5 });

    odometers.forEach(odometer => observer.observe(odometer));
});

