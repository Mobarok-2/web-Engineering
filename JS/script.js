Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr" , {
    videos: ["media/0.mp4", "media/2.mp4", "media/3.mp4"],
  });


  gsap.to(".fleftlm",{
    scrollTrigger : {
        trigger: "#featuredimg",
        pin: true,
        start: "top top",
        end: "bottom bottom",
        endTrigger: ".last",
        scrub: 1
    },
    y:  "-300%",
    ease: Power1
  })
  let sections = document.querySelectorAll(".fleftlm");
  Shery.imageEffect(".images", {
    style: 5,
    config: {onMouse: {value:1}},
    slideStyle: (setScroll) => {
        sections.forEach(function(section, index){
            ScrollTrigger.create({
                trigger:section,
                start: "top top",
                scrub: 1,
                onUpdate: function(prog) {
                    setScroll(prog.progress+index)
                }
            })
        })
    }
  });
gsap.from(".nlink" , {
    stagger: .3,
    y: 10,
    opacity: 0
})
Shery.imageEffect("#fimgs", {
    style:5,
    gooey:true,
    config: {"a":{"value":0.23,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.707887201195219},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":8}},"discard_threshold":{"value":0.54,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    
})
document.querySelector("#ftexts button").addEventListener("mouseover", function(){
    gsap.to("#future video",{
        opacity:1,
        duration: 2,
        ease: Power4
    })
});
document.querySelector("#ftexts button").addEventListener("mouseleave", function(){
    gsap.to("#future video",{
        opacity:0,
        duration: 2,
        ease: Power4
    })
});
