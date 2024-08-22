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
    var body = document.querySelector(".glitch__container");
    var logo = document.querySelector(".hlogo--color")
    var icon = document.querySelector(".hicon--color");
    var nodos = document.querySelector(".section__ejes")

    body.classList.toggle("scroll",window.scrollY>700);
    body.classList.toggle("glitch",window.scrollY>700);
    body.classList.toggle("none",window.scrollY>2500);
    body.classList.toggle("text",window.scrollY>4700);

    nodos.classList.toggle("nodes-true",window.scrollY>2500);
    nodos.classList.toggle("img",window.scrollY>2500);
    nodos.classList.toggle("nodes-false",window.scrollY>5000);

    logo.classList.toggle("inv",window.scrollY>3000);

})

//background elements scroll
window.addEventListener("scroll", function(){
    var video = document.querySelector(".inicio__element");
    var texto = document.querySelector(".inicio__banner");
    var sep = document.querySelector(".separador__final");

    video.classList.toggle("out__section",window.scrollY>2000);
    video.classList.toggle("view__section",window.scrollY>5100);
    texto.classList.toggle("out__section",window.scrollY>850);
    video.classList.toggle("out__section-2",window.scrollY>6500);
    sep.classList.toggle("out__section-separador",window.scrollY>6700);
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



