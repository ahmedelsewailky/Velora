$(function(){$("[data-bs-toggle='tooltip']").tooltip({trigger:"hover",placement:"bottom"}),$(document).mousemove(function(t){let e=t.clientX/window.innerWidth,i=t.clientY/window.innerHeight;$(".floating-img").each(function(){var t=$(this).data("speed"),n=(e-.5)*t*10,t=(i-.5)*t*10;$(this).css("transform",`translate(${n}px, ${t}px)`)})})});
//# sourceMappingURL=main.js.map
