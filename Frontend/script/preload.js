// preloader display none
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function(){
    preloader.classList.add("preloader-button");
})
function continuar(){
    preloader.classList.add("preloader-hidden");
}
