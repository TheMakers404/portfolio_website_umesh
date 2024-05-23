function locomotiveanimation(){
  gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
locomotiveanimation()

gsap.to("#nav", {
  transform: "translateY(-100%)",
  opacity: 0,
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "top 0",
    end: "top -50%",
    scrub: true,
  },
});



// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true
// });


//project responsive start
function updateParagraphs() {
  const paragraphs = document.querySelectorAll('.child p');
  const newText = 'New text content goes here';
  const originalTexts = Array.from(paragraphs).map(p => p.getAttribute('data-original-text') || p.textContent);

  paragraphs.forEach((paragraph, index) => {
    if (window.innerWidth < 600) {
      paragraph.textContent = newText;
    } else {
      paragraph.textContent = originalTexts[index];
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const paragraphs = document.querySelectorAll('.child p');
  paragraphs.forEach(paragraph => {
    if (!paragraph.getAttribute('data-original-text')) {
      paragraph.setAttribute('data-original-text', paragraph.textContent);
    }
  });

  updateParagraphs();
  window.addEventListener('resize', updateParagraphs);
});

//project responsive end

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


gsap.from(".section__text__p1, .title,.section__text__p2,.emaill,#socials-container", {
  y: 100,
  opacity: 0,
  delay: 0.2,
  duration: 0.6,
  stagger: 0.1
});

gsap.from(".section__pic-container", {
  scale:0.9,
  opacity: 0,
  delay: 0.8,
  duration: 0.5,
});


document.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    left: dets.x,
    top: dets.y,
  });
});
document.querySelectorAll(".child").forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(1)",
    });
  });
  elem.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%,-50%) scale(0)",
    });
  });
});


