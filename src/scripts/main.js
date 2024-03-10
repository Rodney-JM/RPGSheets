const arrow = document.querySelector("#arrow");
const btn = document.querySelector("#btn");
const lists = document.querySelectorAll(".menu-item");
const menuSymbols = document.querySelectorAll('.menu');
const menuNav = document.querySelector(".nav");

btn.addEventListener('mouseover', () => {
    arrow.classList.remove('arrow');

    setTimeout(() => {
        arrow.classList.add('arrow');
    }, 10); 
});