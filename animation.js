// gsap.to('#box',{
//     x:1600,
//     duration:2,
//     delay:1,
//     backgroundColor:'blue',
//     rotate:360,
//     borderRadius:360,
//     scale:0.5
// })
// gsap.from("h1",{
//     y:150,
//     duration:1,
//     opacity:0,
//     delay:1,
//     stagger:0.2
// })
// gsap.to("#circle",{
//     x:1600,
//     borderRadius:'10px',
//     duration:2.5,
//     delay:1,
//     rotate:360,
//     backgroundColor:'red',
//     repeat:-1,
//     yoyo:true
// })

var tl= gsap.timeline()

tl.to("#box1",{
    x:1400,
    duration:2.5,
    delay:1.5
})
tl.to("#box2",{
    x:1400,
    rotate:360,
    duration:2.5,
   
})
tl.to("#box3",{
    x:800,
    rotate:-360,
    duration:2
})