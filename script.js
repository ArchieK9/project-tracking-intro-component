"use strict";

let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");
let close = document.querySelector(".close");
let ham = document.querySelector(".hamburger");

menu.addEventListener("click", () => {
    let isNavOpen = nav.style.display === "flex";

    if (isNavOpen) {
        nav.style.display = "none"; 
        ham.style.display = "block";
        close.style.display = "none";
    } else {
        nav.style.display = "flex";
        ham.style.display = "none";
        close.style.display = "block";
    }
});
