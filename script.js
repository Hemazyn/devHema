/** NOTE LIGHT & DARK MODE **/
var moon = document.getElementById("moon");
moon.onclick = function () {
    document.body.classList.toggle("theme-mode");
    if (document.body.classList.contains("theme-mode")) {
        moon.src = "./images/moon.svg";
    } else {
        moon.src = "./images/sun3.webp";
    }
}

/** NOTE  active nav-link section **/
//query selectors
var sections = document.querySelectorAll("section");
var navLink = document.querySelectorAll(".nav-link");
var tabItem = document.querySelectorAll(".tab-item");
//helper functions
const actionSectionHandler = (currentSectionId) => {
    navLink.forEach(link => {
        if (link.dataset.section === currentSectionId) {
            link.classList.add('active');
            return;
        }
        link.classList.remove('active');
    })
    tabItem.forEach((link) => {
        if (link.dataset.section === currentSectionId) {
            link.classList.add('active');
            return;
        }
        link.classList.remove('active');
    })
}
//intersection observer
function sectionWatcherCallBack(section, sectionWatcher) {
    section.forEach(section => {
        if (!section.isIntersecting) { return; };
        actionSectionHandler(section.target.id);
    });
}
const sectionWatcherOptions = {
    threshold: .6
}
const sectionWatcher = new IntersectionObserver(sectionWatcherCallBack, sectionWatcherOptions)
sections.forEach(section => {
    sectionWatcher.observe(section);
})

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



// var sections = document.querySelectorAll("section");
// var navLink = document.querySelectorAll(".nav-link");
// var tabItem = document.querySelectorAll(".tab-item");
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
//     /** NOTE tab-item **/
//     tabItem.forEach((li) => {
//         li.classList.remove("active");
//         let current = "";
//         if (li.href.contains(current)) {
//             li.classList.add("active");
//         }
//     });
// };