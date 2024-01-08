"use strict"

const text = document.querySelector(".second-part");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Uno Studio";
    }, 0);
    setTimeout(() => {
        text.textContent = "Una Famiglia";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Una Garanzia";
    }, 8000); //1s = 1000 milliseconds
}
textLoad();
setInterval(textLoad, 12000);