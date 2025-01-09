
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

    video.classList.toggle("out__section",window.scrollY>2000);
    texto.classList.toggle("out__section",window.scrollY>850);
    video.classList.toggle("view__section",window.scrollY>5000);
    video.classList.toggle("low__opacity",window.scrollY>5500);
    video.classList.toggle("out__section-2",window.scrollY>7000);
    sep.classList.toggle("out__section-separador",window.scroll>8700);
})

//button modal section
const action=document.querySelector(".send");
const showZine=document.querySelector(".zine");
const showVideo=document.querySelector(".showVideo");
const opModal=document.getElementsByClassName("button--open");
const openModal=document.querySelector(".button--open");
const modalContent=document.getElementsByClassName("modal__content");
// const closeModal=document.querySelector(".button--close");

function modal(img){
    // modalContent[0].style.backgroundImage=`url(${img})`;
    action.showModal();
    action.classList.toggle("opacity-modal")
}
function closeModal(){
    event.preventDefault();
    action.classList.toggle("opacity-modal")
    const checkLogo = document.getElementById("check_button");
    checkLogo.innerHTML = '<img src="./Frontend/assets/icons/send-horizontal.svg" alt="sendbutton"></img>'
    checkLogo.disabled = false;
    action.close();
}
function zmodal(){
    console.log("aquí está la función")
    showZine.showModal();
    showZine.classList.toggle("opacity-modal")
}
function closeZModal(){
    showZine.classList.remove("opacity-modal")
    showZine.close();
}
function vmodal(){
    showVideo.showModal();
    showVideo.classList.toggle("opacity-modal")
}
function closeVModal(){
    showVideo.classList.remove("opacity-modal")
    showVideo.close();
}

function audioviasualInfo(){
    var image = document.querySelector(".image");
    var data = document.querySelector(".data");
    var buttons = document.querySelector(".controls__container");
    image.classList.toggle("image-show")
    data.classList.toggle("data-show")
    buttons.classList.toggle("show-buttons")
}

function changeControlsP(cl, src, alt, text, img, title, linkV){
    const logo = document.getElementById("logo")
    const paragraph = document.getElementById("parag")
    const cortoImage = document.getElementById("center__image")
    const corto = document.getElementById("corto")
    cortoImage.innerHTML=`<img class="center__img" src="${img}" alt="imagen portada"></img>`
    logo.innerHTML=`<img class="${cl}" src="${src}" alt="${alt}"></img>`
    paragraph.innerHTML=text
    corto.innerHTML = `<iframe class="video" title="${title}" width="560" height="315" src="https://${linkV}" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>`
}



// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'nav.html', true);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     document.getElementById('menuContainer').innerHTML = xhr.responseText;
//   }
// };
// xhr.send();




