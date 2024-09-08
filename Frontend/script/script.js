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
    nodos.classList.toggle("img",window.scrollY>3500);
    nodos.classList.toggle("nodes-false",window.scrollY>7500);

    logo.classList.toggle("inv",window.scrollY>3000);

})

//background elements scroll
window.addEventListener("scroll", function(){
    var video = document.querySelector(".inicio__element");
    var texto = document.querySelector(".inicio__banner");
    var sep = document.querySelector(".separador__final");

    video.classList.toggle("out__section",window.scrollY>2000);
    video.classList.toggle("view__section",window.scrollY>7500);
    texto.classList.toggle("out__section",window.scrollY>850);
    video.classList.toggle("out__section-2",window.scrollY>8900);
    sep.classList.toggle("out__section-separador",window.scrollY>8900);
})

//button modal section
const action=document.querySelector(".modal");
const opModal=document.getElementsByClassName("button--open");
const openModal=document.querySelector(".button--open");
const modalContent=document.getElementsByClassName("modal__content");
// const closeModal=document.querySelector(".button--close");

function modal(img){
    modalContent[0].style.backgroundImage=`url(${img})`;
    action.showModal();
}
function closeModal(){
    event.preventDefault();
    const checkLogo = document.getElementById("check_button");
    checkLogo.innerHTML = '<img src="./Frontend/assets/icons/send-horizontal.svg" alt="sendbutton"></img>'
    checkLogo.disabled = false;
    action.close();
}




