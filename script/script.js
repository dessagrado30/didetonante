window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("abajo",window.scrollY>900);
    header.classList.toggle("arriba",window.scrollY>3500);

})

window.addEventListener("scroll", function(){
    var body = document.querySelector("body");
    body.classList.toggle("otra",window.scrollY>900);
    body.classList.toggle("scroll",window.scrollY>900);
    body.classList.toggle("otra_dos",window.scrollY>3000);
})


window.addEventListener("scroll", function(){
    var video = document.querySelector(".inicio__element");
    var texto = document.querySelector(".inicio__banner");
    var sep = document.querySelector(".separador__f");
    video.classList.toggle("out__section",window.scrollY>900);
    texto.classList.toggle("out__section",window.scrollY>900);
    sep.classList.toggle("out__section-separador",window.scrollY<3500);
})

const dialog=document.querySelector(".modal");
const openModal=document.querySelector(".button--open");
const closeModal=document.querySelector(".button--close");

openModal.addEventListener("click", ()=>{
    dialog.showModal();
})

closeModal.addEventListener("click", ()=>{
    dialog.close();
})

