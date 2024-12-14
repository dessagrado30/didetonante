gsap.registerPlugin(ScrollTrigger);

var timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '.pages',
        // markers: true,
        start: 'center top',
        end: '+=2800 1000',
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