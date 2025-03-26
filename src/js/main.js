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

