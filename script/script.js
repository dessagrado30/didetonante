//preloader display none
window.addEventListener("load", function(){
    const preloader = document.querySelector(".preloader");
    preloader.style.display="none";
})

//header transorn scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("abajo",window.scrollY>500);
    // header.classList.toggle("arriba",window.scrollY>3500);

})

//elements toggle scroll
window.addEventListener("scroll", function(){
    var body = document.querySelector(".inter__element");
    var logo = document.querySelector(".hlogo--color")
    var icon = document.querySelector(".hicon--color");
    var nodos = document.querySelector(".section__groups")

    body.classList.toggle("scroll",window.scrollY>900);
    body.classList.toggle("glitch",window.scrollY>600);
    body.classList.toggle("none",window.scrollY>2500);
    body.classList.toggle("text",window.scrollY>4400);

    nodos.classList.toggle("nodes-true",window.scrollY>2500);
    nodos.classList.toggle("nodes-false",window.scrollY>4200);

    logo.classList.toggle("inv",window.scrollY>3000);

})

//background elements scroll
window.addEventListener("scroll", function(){
    var video = document.querySelector(".inicio__element");
    var texto = document.querySelector(".inicio__banner");
    var sep = document.querySelector(".separador__final");

    video.classList.toggle("out__section",window.scrollY>850);
    video.classList.toggle("view__section",window.scrollY>4200);
    texto.classList.toggle("out__section",window.scrollY>850);
    video.classList.toggle("out__section-2",window.scrollY>5850);
    sep.classList.toggle("out__section-separador",window.scrollY<5500);
})

//button modal section
const dialog=document.querySelector(".modal");
const openModal=document.querySelector(".button--open");
const closeModal=document.querySelector(".button--close");

openModal.addEventListener("click", ()=>{
    dialog.showModal();
})

closeModal.addEventListener("click", ()=>{
    dialog.close();
})

// const mediumBp = matchMedia('(min-width: 1000px)');
// const changeSize = mql => {
//     mql.matches
//     if (document.getElementById('glitch').src.endsWith('Glitch_.gif')) {
//         document.getElementById('glitch').src='assets/Video/Glitch_responsivo.gif';
//     }else{
//         document.getElementById('glitch').src='assets/Video/Glitch_.gif';
//     }
// }
//
// mediumBp.addListener(changeSize);
// changeSize(mediumBp);

