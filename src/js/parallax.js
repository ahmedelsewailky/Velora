/**
     * Handles mouse movement to create a parallax effect at @page index.html [Hero Section].
     * Elements with the class "abs" will move based on cursor position.
     */
if (window.innerWidth > 768) { // تشغيل التأثير فقط إذا كان العرض أكبر من 768px
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
}