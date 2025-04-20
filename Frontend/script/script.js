
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

    video.classList.toggle("low__opacity",window.scrollY>1000);
    // texto.classList.toggle("out__section",window.scrollY>850);
    video.classList.toggle("view__section",window.scrollY>4500);
    // video.classList.toggle("low__opacity",window.scrollY>5500);
    video.classList.toggle("out__section-2",window.scrollY>7500);
    sep.classList.toggle("out__section-separador",window.scroll>8700);
})

//button modal section
const action=document.querySelector(".send");
const showZine=document.querySelector(".fanZ");
const showVideo=document.querySelector(".showVideo");

function modal(img){
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

// Modal video

// el cambio que hay que hacer en esta sección, es transformar los datos a json y administrarlo desde ahí para optimizar el funcionamiento de los enlaces y acciones.

function vmodal(linkV, title, min){
    const corto = document.getElementById("corto")
    // const originalText = corto.textContent;
    if (min === 1){
        corto.innerHTML = `<iframe class="video" title="${title}" width="560" height="315" src="https://${linkV}" frameborder="0" allowfullscreen="" allow="autoplay; fullscreen" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>`
    }
    // corto.textContent = textContent.slice(0, -147) + `?autoplay=1&muted=0&loop=1?subtitle=en"` + textContent.slice(-147)
    showVideo.showModal();
    showVideo.classList.toggle("opacity-modal")
    
    
}
function closeVModal(li, ti){
    const corto = document.getElementById("corto")
    corto.innerHTML = `<iframe class="video" title="${ti}" width="560" height="315" src="https://${li}" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>`
    showVideo.classList.remove("opacity-modal")
    showVideo.close();
}


function audioviasualInfo(){
    var image = document.querySelector(".image");
    var data = document.querySelector(".data");
    var buttons = document.querySelector(".controls__container");
    var backg = document.querySelector(".backg__controls")
    image.classList.toggle("image-show")
    data.classList.toggle("data-show")
    buttons.classList.toggle("show-buttons")
    backg.style.backgroundImage= `url("../assets/img/nodos/audiovisual/armadillo.webp")`
}

function changeControlsP(cl, src, alt, text, img, port, linkV, title){
    const logo = document.getElementById("logo")
    const paragraph = document.getElementById("parag")
    const cortoImage = document.getElementById("center__image")
    const pinImage = document.getElementById("pin__image")
    

    const armadillo = document.getElementById("armadillo__post")
    const lumbre = document.getElementById("lumbre__post")
    const rpmasc = document.getElementById("rpmasc__post")
    const mutante = document.getElementById("mutante__post")
    const silencio = document.getElementById("silencio__post")
    const cbutton = document.getElementById("closeButton")

    // pinImage.innerHTML=`<img src="${img}" alt="imagen ${title}"></img>`
    cortoImage.innerHTML=`<img class="center__img" src="${img}" alt="imagen portada"></img>`
    logo.innerHTML=`<img class="${cl}" src="${src}" alt="${alt}"></img>`
    paragraph.innerHTML=text

    const corto = document.getElementById("corto")
    corto.innerHTML = `<div class="video__container"><iframe class="video" title="${title}" width="560" height="315" src="https://${linkV}" frameborder="0" allowfullscreen="" allow="autoplay; fullscreen" sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe></div>`
    cbutton.setAttribute(
        "onclick", 
        `closeVModal("${linkV}", "${title}")`)
    
    armadillo.style.opacity = port[4]
    lumbre.style.opacity = port[3]
    rpmasc.style.opacity = port[2]
    mutante.style.opacity = port[1]
    silencio.style.opacity = port[0]
}



// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'nav.html', true);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     document.getElementById('menuContainer').innerHTML = xhr.responseText;
//   }
// };
// xhr.send();




