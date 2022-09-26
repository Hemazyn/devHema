var moon = document.getElementById("moon");

moon.onclick = function () {
    document.body.classList.toggle("theme-mode");
    if (document.body.classList.contains("theme-mode")) {
        moon.src = "./images/sun3.png";
    } else {
        moon.src = "./images/moon.svg";
    }
}


// ACTIVE SECTION
$(function () {
    $('.navbar-nav li a').click(function () {
        $('.navbar-nav li').removeClass();
        $($(this).attr('href')).addClass('active');
    });
});