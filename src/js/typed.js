document.addEventListener("DOMContentLoaded", function () {
    var options = {
        strings: ["Web Development", "Mobile App", "SEO Basics", "Social Marketing"],
        typeSpeed: 100,  
        backSpeed: 50,   
        backDelay: 500, 
        startDelay: 200, 
        loop: true,
        showCursor: false    
    };
    new Typed("#typed-text", options);
});