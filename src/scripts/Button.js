const buttonAnimation = ()=>{
    const arrow = document.querySelector("#arrow");
    const btn = document.querySelector("#btn");

    btn.addEventListener('mouseover',()=>{
        arrow.classList.toggle('arrow');
    })
}

export default buttonAnimation;