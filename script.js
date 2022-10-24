/** NOTE LIGHT & DARK MODE **/
var moon = document.getElementById("moon");
moon.onclick = function () {
    document.body.classList.toggle("theme-mode");
    if (document.body.classList.contains("theme-mode")) {
        moon.src = "./images/moon.svg";
    } else {
        moon.src = "./images/sun3.png";
    }
}

/** NOTE  active nav-link section **/
var sections = document.querySelectorAll("section");
var navLink = document.querySelectorAll(".nav-link");
var tabItem = document.querySelectorAll(".tab-item");
window.onscroll = () => {
    let current = "";
    sections.forEach((section) => {
        var sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute("id");
        }
    });
    /** NOTE nav-link **/
    navLink.forEach((a) => {
        a.classList.remove("active");
        if (a.href.includes(current)) {
            a.classList.add("active");
        }
    });
    /** NOTE tab-item **/
    tabItem.forEach((li) => {
        li.classList.remove("active");
        if (li.href.includes(current)) {
            li.classList.add("active");
        }
    });
};

/** NOTE  ANIMATE ON SCROLL **/
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);

/** NOTE  active nav-link section **/
// var sections = document.querySelectorAll("section");
// var navLink = document.querySelectorAll(".nav-link");
// window.onscroll = () => {
//     let current = "";
//     sections.forEach((section) => {
//         var sectionTop = section.offsetTop;
//         if (pageYOffset >= sectionTop - 60) {
//             current = section.getAttribute("id");
//         }
//     });
//     /** NOTE nav-link **/
//     navLink.forEach((a) => {
//         a.classList.remove("active");
//         if (a.href.includes(current)) {
//             a.classList.add("active");
//         }
//     });
// };