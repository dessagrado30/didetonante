
//header transorn scroll
window.addEventListener("scroll", function(){
    var bgImage = document.querySelector(".background__image")
    var intertext = document.querySelector(".intertext")
    intertext.classList.toggle("view",window.scrollY>2300)
    bgImage.innerHTML='<img class="img_issue" src="../assets/img/in_tension/TonyFry_texture.webp" alt="fotografía de portada - In-tension"></img>'
})

