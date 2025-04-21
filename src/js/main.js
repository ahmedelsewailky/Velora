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

    /**
     * Sticky Navbar
     */
    $(document).ready(function () {
        var navbar = $('.navbar');
        var navbarOffset = navbar.offset().top + 100;
        var lastScrollTop = 0;
        var delta = 5;

        function toggleSticky() {
            if ($(window).width() > 992) {
                var currentScroll = $(window).scrollTop();

                if (Math.abs(currentScroll - lastScrollTop) > delta) {
                    if (currentScroll > lastScrollTop && currentScroll > navbarOffset) {
                        navbar.addClass('sticky');
                        navbar.css('top', '-100px');

                        $('.hero-section')
                            .removeClass('navbar-visible')
                            .addClass('navbar-hidden');
                    } else if (currentScroll < lastScrollTop) {
                        navbar.addClass('sticky');
                        navbar.css('top', '0');

                        $('.hero-section')
                            .removeClass('navbar-hidden')
                            .addClass('navbar-visible');
                    }
                    lastScrollTop = currentScroll;
                }

                if (currentScroll <= navbarOffset) {
                    navbar.removeClass('sticky');
                    navbar.css('top', '');

                    $('.hero-section')
                        .removeClass('navbar-visible navbar-hidden');
                }

            } else {
                navbar.removeClass('sticky');
                navbar.css('top', '');

                $('.hero-section')
                    .removeClass('navbar-visible navbar-hidden');
            }
        }

        $(window).on('scroll resize', function () {
            toggleSticky();
        });
    });
});

/**
 * Assign a dynamic year on the footer
 */
let year = document.getElementById("footer-year");
year.textContent = new Date().getFullYear();

