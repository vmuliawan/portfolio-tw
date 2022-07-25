window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    let scroll = window.pageYOffset;

    if (scroll > fixedNav) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
};

window.scrollTo({ behavior: "smooth" });

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});
