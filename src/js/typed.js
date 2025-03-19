document.addEventListener("DOMContentLoaded", function () {
    var options = {
        strings: ["Everything", "Web Development", "Mobile App", "SEO", "Social Marketing"],
        typeSpeed: 100,  
        backSpeed: 50,   
        backDelay: 1000, 
        startDelay: 200, 
        loop: true       
    };
    new Typed("#changing-text", options);
});