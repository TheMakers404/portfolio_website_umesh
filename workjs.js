// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector(".main3"),
//     smooth: true
//   });



  function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main3"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main3", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main3").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()


gsap.to("#nav", {
  transform: "translateY(-100%)",
  opacity: 0,
  scrollTrigger: {
    trigger: ".container",
    scroller: ".main3",
    start: "top 0",
    end: "top -50%",
    scrub: true,
  },
});
