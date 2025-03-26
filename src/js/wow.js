document.addEventListener("DOMContentLoaded", function () {
    var wow = new WOW({
        boxClass: 'wow', // الكلاس المستخدم للعناصر اللي هتتحرك
        animateClass: 'animate__animated', // استخدم كلاس Animate.css الصحيح
        offset: 100, // تأخير ظهور العنصر بعد وصوله للشاشة
        mobile: true, // تفعيل الحركات على الهواتف
        live: true, // تفعيل الحركات على العناصر الجديدة اللي بتضاف للصفحة
        resetAnimation: true // إعادة التحريك عند التمرير مرة أخرى
    });

    wow.init();
});
