// preloader display none
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function(){
    preloader.classList.add("preloader-button");
    preloader.classList.add("preloader-text");
})
function continuar(){
    preloader.classList.add("preloader-hidden");
}
