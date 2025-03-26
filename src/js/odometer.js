document.addEventListener("DOMContentLoaded", function () {
    const odometers = document.querySelectorAll(".odometer");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            let odometer = entry.target;
            let finalValue = odometer.dataset.value;

            if (entry.isIntersecting) {
                odometer.innerHTML = "0";
                setTimeout(() => {
                    odometer.innerHTML = finalValue;
                }, 200);
            }
        });
    }, { threshold: 0.5 });

    odometers.forEach(odometer => observer.observe(odometer));
});

