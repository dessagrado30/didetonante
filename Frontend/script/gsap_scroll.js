gsap.registerPlugin(ScrollTrigger);

var timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#ejes',
        markers: true,
        start: '300 top',
        end: '+=2000 top',
        scrub: 2,
    },
})

timeline.to(
    '.pages', { 
        x: -2000,
        duration: 1,     
    }
)

timeline.to(
    '.pages', { 
        opacity: 0,
        duration: .1,
    }, '-=.2'
    
)
