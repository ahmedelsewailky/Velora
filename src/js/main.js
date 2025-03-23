$(function () {
    "use strict";
    $("[data-bs-toggle='tooltip']").tooltip({
        trigger: "hover",
        placement: "bottom"
    });

    $(document).mousemove(function (event) {
        let x = event.clientX / window.innerWidth;
        let y = event.clientY / window.innerHeight;

        $(".abs").each(function () {
            let speed = $(this).data("speed");
            let moveX = (x - 0.5) * speed * 10;
            let moveY = (y - 0.5) * speed * 10;

            $(this).css("transform", `translate(${moveX}px, ${moveY}px)`);
        });
    });



    $(".dropdown-menu .dropdown-toggle").on("click", function (e) {
        e.stopPropagation();

        $(this).next(".dropdown-menu").addClass("show");
    });

    $(".btn-back").on("click", function (e) {
        e.stopPropagation();

        $(".dropdown-menu.show").last().removeClass("show");
    });

});
