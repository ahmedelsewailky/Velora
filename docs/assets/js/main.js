$(function(){function a(){let i=0;$(".cart-item").each(function(){var t=parseFloat($(this).find(".price").attr("data-price")),e=parseInt($(this).find(".quantity-value").val())||1;i+=t*e}),$(".subtotal-price").text("$"+i.toFixed(2));var t=parseFloat($(".delivery-price").text().replace("$",""))||0,t=i+t;$(".total-price").text("$"+t.toFixed(2))}function n(t){var e=t.find(".price"),i=parseFloat(e.attr("data-price")),t=parseInt(t.find(".quantity-value").val())||1;e.text("$"+(i*t).toFixed(2)),a()}$(".quantity-input button").click(function(){var t=$(this).closest(".cart-item"),e=t.find(".quantity-value");let i=parseInt(e.val())||1;$(this).hasClass("increase")?i++:$(this).hasClass("decrease")&&1<i&&i--,e.val(i),n(t)}),$(".quantity-value").on("input",function(){var t=$(this).closest(".cart-item"),e=parseInt($(this).val());(isNaN(e)||e<1)&&$(this).val(1),n(t)}),$(".item-remove-btn").click(function(){$(this).closest(".cart-item").remove(),a()}),a()}),$(function(){$("[data-bs-toggle='tooltip']").tooltip({trigger:"hover",placement:"bottom"}),$(document).mousemove(function(t){let i=t.clientX/window.innerWidth,a=t.clientY/window.innerHeight;$(".floating-img").each(function(){var t=$(this).data("speed"),e=(i-.5)*t*10,t=(a-.5)*t*10;$(this).css("transform",`translate(${e}px, ${t}px)`)})})}),document.addEventListener("DOMContentLoaded",function(){new Typed("#changing-text",{strings:["Everything","Web Development","Mobile App","SEO","Social Marketing"],typeSpeed:100,backSpeed:50,backDelay:1e3,startDelay:200,loop:!0})});
//# sourceMappingURL=main.js.map
