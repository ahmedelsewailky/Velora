$(function(){function a(){let n=0;$(".cart-item").each(function(){var t=parseFloat($(this).find(".price").attr("data-price")),e=parseInt($(this).find(".quantity-value").val())||1;n+=t*e}),$(".subtotal-price").text("$"+n.toFixed(2));var t=parseFloat($(".delivery-price").text().replace("$",""))||0,t=n+t;$(".total-price").text("$"+t.toFixed(2))}function i(t){var e=t.find(".price"),n=parseFloat(e.attr("data-price")),t=parseInt(t.find(".quantity-value").val())||1;e.text("$"+(n*t).toFixed(2)),a()}$(".quantity-input button").click(function(){var t=$(this).closest(".cart-item"),e=t.find(".quantity-value");let n=parseInt(e.val())||1;$(this).hasClass("increase")?n++:$(this).hasClass("decrease")&&1<n&&n--,e.val(n),i(t)}),$(".quantity-value").on("input",function(){var t=$(this).closest(".cart-item"),e=parseInt($(this).val());(isNaN(e)||e<1)&&$(this).val(1),i(t)}),$(".item-remove-btn").click(function(){$(this).closest(".cart-item").remove(),a()}),a()}),$(function(){$("[data-bs-toggle='tooltip']").tooltip({trigger:"hover",placement:"bottom"}),$(document).mousemove(function(t){let n=t.clientX/window.innerWidth,a=t.clientY/window.innerHeight;$(".floating-img").each(function(){var t=$(this).data("speed"),e=(n-.5)*t*10,t=(a-.5)*t*10;$(this).css("transform",`translate(${e}px, ${t}px)`)})}),$(".dropdown-menu .dropdown-toggle").on("click",function(t){t.stopPropagation(),$(this).next(".dropdown-menu").addClass("show")}),$(".btn-back").on("click",function(t){t.stopPropagation(),$(".dropdown-menu.show").last().removeClass("show")})}),document.addEventListener("DOMContentLoaded",function(){new Typed("#changing-text",{strings:["Everything","Web Development","Mobile App","SEO","Social Marketing"],typeSpeed:100,backSpeed:50,backDelay:1e3,startDelay:200,loop:!0})});
//# sourceMappingURL=main.js.map
