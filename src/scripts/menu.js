const arrow = document.querySelector("#arrow");
const btn = document.querySelector("#btn");
const lists = document.querySelectorAll(".menu-item");
const menuSymbols = document.querySelectorAll('.menu');
const menuNav = document.querySelector(".nav");

const subItems = {
    Introdução:["Mundos de Aventura", "Como usar os livros?", "Como jogar?", "Aventuras"],
    Criação:["Além do level 1"],
    Raças:["Humanos", "Gnomos", "Anões"],
    Classes:["Clérigo", "Bárbaro", "Mago"],
    Antecedentes:["Acólito", "Artista", "Criminoso"]
}
/* menu click */
menuSymbols.forEach((menuSymbol)=>{
    menuSymbol.addEventListener('click', ()=>{
        menuNav.classList.toggle('none');
        menuNav.classList.toggle('mostrar');
    })
})
/* menu click */

/* menu */
lists.forEach((list)=>{
    list.addEventListener('click', ()=>{
        let arrow = list.querySelector('.arrow2');

        if(arrow){
            arrow.classList.toggle('bxs-right-arrow');
            arrow.classList.toggle('bxs-down-arrow');
        }

        let listName = list.textContent.trim().split('\n')[0];

        if(list.children.length > 1){
            while(list.children.length > 1){
                list.removeChild(list.lastChild);
            }
            return;
        }

        if(subItems[listName]){
            for(let i=0;i<3;i++){
                let newSubItem = document.createElement('a');
                newSubItem.setAttribute('href', `${subItems[listName][i]}`+ '.html');
                newSubItem.innerHTML = subItems[listName][i] + '<br>';
                list.appendChild(newSubItem);
            }
        }
    })
})

/* menu */
