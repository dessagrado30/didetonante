gsap.registerPlugin(ScrollTrigger);

var timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#ejes',
        // markers: true,
        start: '100 top',
        end: '+=1900 top',
        scrub: 2,
    },
})

timeline.to(
    '.pages', { 
        x: -2300,
        duration: 1,     
    }
)

timeline.to(
    '.pages', { 
        opacity: 0,
        duration: .1,
    }, '-=.4'
    
)
