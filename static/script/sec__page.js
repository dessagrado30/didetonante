//header icon color _ toggle
window.addEventListener("scroll", function(){
    var icon = document.querySelector(".hicon--color");
    icon.classList.toggle("invert",window.scrollY>900);
})
