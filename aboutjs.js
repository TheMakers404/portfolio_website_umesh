function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()


var crsr = document.querySelector(".cursorr")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + 20+"px"
    crsr.style.top = dets.y - (crsr.offsetHeight / 2) + "px";
})

gsap.to("#nav", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: ".page1",
      scroller: ".main",
      start: "top 0",
      end: "top -50%",
      scrub: true,
    },
  });
  




var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2 h1",
        scroller: ".main",
        // markers:true,
        start: "top 70%",
        end: "top 0",
        scrub: 2
    }
})
tl.to(".page2 h1", {
    x: -100,
}, "anim")
tl.to(".page2 h2", {
    x: 100
}, "anim")

gsap.from(".me", {
    y: 100,
    opacity: 0,
    delay: 0.2,
    duration: 0.6,
    stagger: 0.1
  });
  gsap.from(".black", {
    x: -100,
    opacity: 0,
    delay: 0.2,
    duration: 0.6,
    stagger: 0.1
  });
  gsap.from(".pg", {
    x: 100,
    opacity: 0,
    delay: 0.2,
    duration: 0.6,
    stagger: 0.1
  });


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        // markers:true,
        start: "top -85%",
          end: "top -30%",
        scrub: 1
    }
  })
  tl2.to(".main", {
    backgroundColor: "#000",
  })
  

  var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})