//header transorn scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header");
    header.classList.toggle("abajo",window.scrollY>500);
})


// TAREA SIMPLIFICAR:

document.getElementById('btn-matters').addEventListener('click', () => {
  const elem = document.getElementById('matters-section');
  elem.classList.remove('parpadeo');
  void elem.offsetWidth; // Reinicia la animación
  elem.classList.add('parpadeo');
});
document.getElementById('btn-mind').addEventListener('click', () => {
  const elem = document.getElementById('mindfield-section');
  elem.classList.remove('parpadeo');
  void elem.offsetWidth; // Reinicia la animación
  elem.classList.add('parpadeo');
});
document.getElementById('btn-stupidity').addEventListener('click', () => {
  const elem = document.getElementById('stupidity-section');
  elem.classList.remove('parpadeo');
  void elem.offsetWidth; // Reinicia la animación
  elem.classList.add('parpadeo');
});
document.getElementById('btn-border').addEventListener('click', () => {
  const elem = document.getElementById('borderland-section');
  elem.classList.remove('parpadeo');
  void elem.offsetWidth; // Reinicia la animación
  elem.classList.add('parpadeo');
});


document.getElementById('btn-reeducation').addEventListener('click', () => {
  const elem = document.getElementById('reeducation-section');
  elem.classList.remove('parpadeo');
  void elem.offsetWidth; // Reinicia la animación
  elem.classList.add('parpadeo');
});
document.getElementById('btn-onresistence').addEventListener('click', () => {
  const elem = document.getElementById('onresistence-section');
  elem.classList.remove('parpadeo');
  void elem.offsetWidth; // Reinicia la animación
  elem.classList.add('parpadeo');
});
document.getElementById('btn-fictofactions').addEventListener('click', () => {
  const elem = document.getElementById('fictofactions-section');
  elem.classList.remove('parpadeo');
  void elem.offsetWidth; // Reinicia la animación
  elem.classList.add('parpadeo');
});



document.getElementById('btn-voices').addEventListener('click', () => {
  const elem = document.getElementById('voices-section');
  elem.classList.remove('parpadeo');
  void elem.offsetWidth; // Reinicia la animación
  elem.classList.add('parpadeo');
});
document.getElementById('btn-reviews').addEventListener('click', () => {
  const elem = document.getElementById('reviews-section');
  elem.classList.remove('parpadeo');
  void elem.offsetWidth; // Reinicia la animación
  elem.classList.add('parpadeo');
});
document.getElementById('btn-now').addEventListener('click', () => {
  const elem = document.getElementById('now-section');
  elem.classList.remove('parpadeo');
  void elem.offsetWidth; // Reinicia la animación
  elem.classList.add('parpadeo');
});




// function scrollUp() {
//   window.scrollBy(0, ); // Desplaza 100 píxeles hacia arriba
// }

function scrollDown() {
  window.scrollBy(0, 750); // Desplaza 100 píxeles hacia abajo
}