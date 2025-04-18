// preloader display none
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function(){
    preloader.classList.add("cont-view");
    
})
function continuar(){
    preloader.classList.add("preloader-hidden");
}

const path = document.getElementById("animated-path");
const originalPath = path.getAttribute("d");
const alternatePath = "m-1430.521 7231.516c-5.044 15.262-7.972 23.867-13.665 31.823-10.333 13.594-15.586 17.089-18.528 16.659-2.312.43-7.566-18.796-10.442-21.806-1.147-1.479-5.88 3.01-13.192 11.733-7.091 9.189-21.351 31.847-26.011 62.735-.554 4.571-.836 16.196-.489 20.256 1.578 16.395 5.525 31.642 14.546 44.78 6.495 9.518 16.872 17.483 27.73 25.519 3.164 2.355 23.491 16.78 53.755 16.717 30.976-.074 44.242-11.386 53.785-17.1 6.963-4.289 11.754-7.973 17.751-14.115 8.803-8.85 26.388-25.975 26.328-63.631-.044-28.321-10.663-52.765-22.696-72.85-7.314-10.017-8.986-15.217-16.156-19.987-2.389-1.622-1.434 3.291-1.947 12.216-1.949 12.468-3.701 12.468-13.828-3.085-13.741-19.104-17.115-19.614-26.865-27.342-12.283-11.114-5.551-23.797-13.794-25.272-1.752-1.748-8.757 5.243-14.011 17.478z";

// Animación con GSAP
const tl = gsap.timeline({ 
  repeat: -1,  // Repetir infinitamente
  yoyo: true,  // Reversa suave
  ease: "sine.inOut"  // Tipo de easing
});

tl.to(path, {
  duration: 1,
  attr: { d: alternatePath },
  ease: "power2.inOut"
});

// Opcional: Pausar/reanudar al hacer clic
path.addEventListener("click", () => {
  tl.paused(!tl.paused());
});