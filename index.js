let navbarTimeline = gsap.timeline();
let herosectionTimeline = gsap.timeline();

// navbar and lgog
navbarTimeline.from('#logoh1', {
    delay: 1,
    duration: 0.4,
    opacity: 0,
    y: -50,
    
})

navbarTimeline.from('.nav-link-animation', {
   
    duration: 0.4,
    opacity: 0,
    y: 50,
    stagger: 0.2,
   
})

//  heros section 
herosectionTimeline.from('.herosectionCenterText', {
   delay: 0.5,
    duration: 0.3,
    opacity: 0,
    stagger: 0.2,
})

herosectionTimeline.from('#herosection #box1',{
    duration: 0.4,
    opacity: 0,
    y: 50,
    stagger: 0.2,
})
herosectionTimeline.from('#herosection #box2',{
    duration: 0.4,
    opacity: 0,
    x: 50,
    stagger: 0.2,
})
herosectionTimeline.from('#herosection #box3',{
    duration: 0.4,
    opacity: 0,
    y: -50,
    stagger: 0.2,
})

// herosection below black sction
gsap.from("#herosectionbelowblacksection h3", {
    delay: 0.3,
    duration:0.5,
    y: 50,
    opacity: 0,
    scrollTrigger: "#herosectionbelowblacksection h3"
    
})
gsap.from("#herosectionbelowblacksection p", {
    delay: 0.4,
    duration:0.5,
    y: 50,
    opacity: 0,
    scrollTrigger: "#herosectionbelowblacksection p"
    
})

// perfomance section 


gsap.from("#performanceimgbox1", {
    delay: 0.3,
    duration:0.5,
    x: -200,
    opacity:0,
    scrollTrigger: "#performanceimgbox1"
    
})
gsap.from("#performanceimgbox2", {
    delay: 0.3,
    duration:0.5,
    y: -50,
    opacity:0,
    scrollTrigger: "#performanceimgbox2"
    
})
gsap.from("#performanceimgbox3", {
    delay: 0.3,
    duration:0.5,
    opacity:0,
    y: 200,
    scrollTrigger: "#performanceimgbox3"
    
})
gsap.from("#performanceimgbox4", {
    delay: 0.3,
    duration:0.5,
    x: 500,
    opacity:0,
    scrollTrigger: "#performanceimgbox4"
    
})


gsap.from(".performancerighttextside h2", {
    delay: 0.3,
    duration:0.5,
    y: 50,
    opacity: 0,
    scrollTrigger: ".performancerighttextside h2"
    
})
gsap.from(".performancerighttextside p, .learnmorediv", {
    delay: 0.4,
    duration:0.5,
    y: 50,
    opacity: 0,
    scrollTrigger: ".performancerighttextside p"
    
})



// project section 

gsap.from(".projects", {
    delay: 0.3,
    duration:0.5,
    y: 50,
    opacity:0,
    stagger: 0.3,
    scrollTrigger: ".projects"
    
})