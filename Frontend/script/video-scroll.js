
const intro = document.querySelector('.inicio');
const video = intro.querySelector('video');

const controller =  new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicators()
    // .setPin(intro)
    .addTo(controller);



let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on = ('update', e => {
    scrollpos = e.scrollPos / 1000;
    // console.log(e);
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    // console.log(scrollpos, delay);
    video.currentTime = scrollpos
}, 42.6); 

