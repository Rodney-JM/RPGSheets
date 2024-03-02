const arrow = document.querySelector("#arrow");
const btn = document.querySelector("#btn");

btn.addEventListener('mouseover', () => {
    arrow.classList.remove('arrow');

    setTimeout(() => {
        arrow.classList.add('arrow');
    }, 10); 
});
