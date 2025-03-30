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
 * Assign a dynamic year on the footer
 */
let year = document.getElementById("footer-year");
year.textContent = new Date().getFullYear();

