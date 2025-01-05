
//elements toggle scroll
window.addEventListener("scroll", function(){
    var body = document.querySelector(".glitch__container");
    var logo = document.querySelector(".hlogo--color")
    var icon = document.querySelector(".hicon--color");
    var nodos = document.querySelector(".section__ejes")

    // body.classList.toggle("scroll",window.scrollY<700);
    // body.classList.toggle("glitch",window.scrollY<700);
    body.classList.toggle("none",window.scrollY>700);
    body.classList.toggle("text",window.scrollY>4700);

    nodos.classList.toggle("nodes-true",window.scrollY>100);
    nodos.classList.toggle("img",window.scrollY>3500);
    nodos.classList.toggle("nodes-false",window.scrollY>2500);

    logo.classList.toggle("inv",window.scrollY>7500);

})

//background elements scroll
window.addEventListener("scroll", function(){
    var video = document.querySelector(".inicio__element");
    var texto = document.querySelector(".inicio__banner");
    var sep = document.querySelector(".separador__final");

    video.classList.toggle("out__section",window.scrollY>1500);
    texto.classList.toggle("out__section",window.scrollY>850);
    video.classList.toggle("view__section",window.scrollY>4300);
    video.classList.toggle("low__opacity",window.scrollY>5500);
    video.classList.toggle("out__section-2",window.scrollY>7000);
    sep.classList.toggle("out__section-separador",window.scroll>8700);
})

//button modal section
const action=document.querySelector(".modal");
const opModal=document.getElementsByClassName("button--open");
const openModal=document.querySelector(".button--open");
const modalContent=document.getElementsByClassName("modal__content");
// const closeModal=document.querySelector(".button--close");

function modal(img){
    // modalContent[0].style.backgroundImage=`url(${img})`;
    action.showModal();
}
function closeModal(){
    event.preventDefault();
    const checkLogo = document.getElementById("check_button");
    checkLogo.innerHTML = '<img src="./Frontend/assets/icons/send-horizontal.svg" alt="sendbutton"></img>'
    checkLogo.disabled = false;
    action.close();
}
function audioviasualInfo(){
    var image = document.querySelector(".image");
    var data = document.querySelector(".data");
    var buttons = document.querySelector(".controls__container");
    image.classList.toggle("image-show")
    data.classList.toggle("data-show")
    buttons.classList.toggle("show-buttons")
}

function changeControlsP(cl, log, alt, text, ci){
    const logo = document.getElementById("logo")
    const paragraph = document.getElementById("parag")
    const cortoImage = document.getElementById("center__image")
    cortoImage.innerHTML=`<img class="center__img" src="${ci}" alt="imagen portada"></img>`
    logo.innerHTML=`<img class="${cl}" src="${log}" alt="${alt}"></img>`
    paragraph.innerHTML=text
}



// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'nav.html', true);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     document.getElementById('menuContainer').innerHTML = xhr.responseText;
//   }
// };
// xhr.send();




