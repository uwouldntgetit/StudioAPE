"use strict"

const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = document.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
isNavbarExpanded = !isNavbarExpanded;
navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
document.documentElement.style.overflow = isNavbarExpanded ? "hidden" : "scroll";
document.body.scroll = isNavbarExpanded ? "no" : "yes";
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

let links = document.getElementsByClassName("navbar-link");


function redirectTest(){
    document.location = "/pages/test.html";
}
function redirectHome(){
    document.location = "/websites/StudioAPE/index.html";
}