const arrow = document.querySelector("#arrow");
const btn = document.querySelector("#btn");
const lists = document.querySelectorAll(".menu-item");
const menuSymbols = document.querySelectorAll('.menu');
const menuNav = document.querySelector(".nav");

const subItems = {
    Introdução:["O "],
}

btn.addEventListener('mouseover', () => {
    arrow.classList.remove('arrow');

    setTimeout(() => {
        arrow.classList.add('arrow');
    }, 10); 
});

/* menu click */
let numberTime = 1;
menuSymbols.forEach((menuSymbol)=>{
    menuSymbol.addEventListener('click', ()=>{
        menuNav.classList.toggle('none');
        menuNav.classList.toggle('navIn');
    })
})
/* menu click */

/* menu */

lists.forEach((list)=>{
    list.addEventListener('click', ()=>{
        let arrow = list.querySelector('.arrow');

        if(arrow){
            arrow.classList.toggle('bxs-right-arrow');
            arrow.classList.toggle('bxs-down-arrow');
        }
    })
})

/* menu */
