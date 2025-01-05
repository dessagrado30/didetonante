gsap.registerPlugin(ScrollTrigger);

var timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#ejes',
        // markers: true,
        start: 'top top',
        end: '+=2500 top',
        scrub: 2,
    },
})

timeline.to(
    '.pages', { 
        x: -1900,
        duration: 1,     
    }

)

timeline.to(
    '.pages', { 
        opacity: 0,
    }, '-=.1'
    
)
