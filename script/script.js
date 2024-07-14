//preloader display none
window.addEventListener("load", function(){
    const preloader = document.querySelector(".preloader");
    preloader.style.display="none";
})

//header transorn scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("abajo",window.scrollY>800);
    // header.classList.toggle("arriba",window.scrollY>3500);

})

//elements toggle scroll
window.addEventListener("scroll", function(){
    var body = document.querySelector(".background");
    var logo = document.querySelector(".hlogo--color")
    var icon = document.querySelector(".hicon--color");
    var nodos = document.querySelector(".section__container")

    body.classList.toggle("scroll",window.scrollY>900);
    // body.classList.toggle("glitch",window.scrollY>0);
    body.classList.toggle("none",window.scrollY>4400);
    body.classList.toggle("text",window.scrollY>4400);

    nodos.classList.toggle("nodes-true",window.scrollY>2500);
    nodos.classList.toggle("nodes-false",window.scrollY>4400);

    logo.classList.toggle("inv",window.scrollY>3000);

})

//background elements scroll
window.addEventListener("scroll", function(){
    var video = document.querySelector(".inicio__element");
    var texto = document.querySelector(".inicio__banner");
    var sep = document.querySelector(".separador__final");

    video.classList.toggle("out__section",window.scrollY>850);
    texto.classList.toggle("out__section",window.scrollY>850);
    sep.classList.toggle("out__section-separador",window.scrollY<5800);
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

