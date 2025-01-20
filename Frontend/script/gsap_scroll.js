gsap.registerPlugin(ScrollTrigger);

var timeline = gsap.timeline({
    scrollTrigger: {
        trigger: '#ejes',
        markers: true,
        start: '500 top',
        end: '+=1500 top',
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
        duration: .1,
    }, '-=.2'
    
)
