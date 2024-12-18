//header transorn scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("abajo",window.scrollY>500);
    // header.classList.toggle("arriba",window.scrollY>3500);

})