function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

gsap.from(".main-text .line1", {
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power2.out",
});

gsap.from(".main-text .line2", {
  opacity: 0,
  x: 100,
  duration: 1,
  delay: 0.2,
  ease: "power2.out",
});

gsap.from("nav", {
  opacity: 0,
  y: -50,
  duration: 1,
  delay: 0.4,
  ease: "power2.out",
});

gsap.from(".ele3", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.6,
  ease: "power2.out",
});

gsap.from(".side-text", {
  opacity: 0,
  x: 100,
  duration: 1,
  delay: 0.8,
  ease: "power2.out",
});
// sec2 animations
document.addEventListener("DOMContentLoaded", function () {
  gsap.from(".floating-card", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    // delay: 2,
    // ease: "power3.out",
    scrollTrigger: {
      trigger: ".floating-card",
      start: "50% 50%",
      end: "50% 50%",
      scrub: 3,
      // markers: true,
    },
  });

  // gsap.from(".about-me", {
  //   opacity: 0,
  //   y: 50,
  //   duration: 1.5,
  //   ease: "power3.out",
  //   scrollTrigger: {
  //     trigger: ".floating-card",
  //     start: "50 50%",
  //     end: "50% 50%",
  //     scrub: 3,
  //     markers: true,
  //   },
  // });
  gsap.from(".about-me-heading .text", {
    opacity: 0,
    x: -50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-me-heading .text",
      start: "50 50%",
      // end: "50% 50%",
      scrub: 1,
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".x-symbol img", {
    opacity: 0,
    scale: 0,
    stagger: 0.15,
    duration: 2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".x-symbol",
      start: "50 50%",
      end: "50% 50%",
      scrub: 3,
      toggleActions: "play none none reverse",
    },
  });

  gsap.from(".about-me-content p", {
    opacity: 0,
    y: 30,
    duration: 0.7,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about-me-content p",
      start: "-200 60%",
      // markers: true,
      scrub: 1,
      toggleActions: "play none none reverse",
    },
  });
});
//adding functionality to nav menu
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

//sec5 animations
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Animate the "SKILLS" heading
  gsap.from(".tech-heading", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".tech-heading",
      start: "top 40%", // Starts slightly early when entering
      end: "top 60%",
      scrub: 4,
      toggleActions: "play none none reverse",
    },
  });

  // Animate Skill Icons (Staggered effect)
  // Set initial scale to prevent small load size
  gsap.set(".skills-grid img", { scale: 1 });

  gsap.from(".skills-grid img", {
    opacity: 0,
    scale: 0.5,
    stagger: 0.2,
    duration: 1.5,
    ease: "back.out(1.5)",
    scrollTrigger: {
      trigger: ".skills-grid",
      start: "top 90%", // Triggers animation slightly earlier
      end: "top 50%",
      scrub: 0.5, // Smooth but not too slow
      toggleActions: "play none none reverse",
    },
  });

  // Animate the paragraph under skills
  gsap.from(".skill-p p", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".skill-p",
      start: "top 80%", // Starts after skill icons appear
      end: "top 55%",
      scrub: 2,
      toggleActions: "play none none reverse",
    },
  });

  // Animate "WHAT I CAN OFFER" heading
  gsap.from(".offer-heading", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".offer-heading",
      start: "top 40%", // Appears naturally after skill section
      end: "top 55%",
      scrub: 4,
      toggleActions: "play none none reverse",
    },
  });

  // Animate Offer Cards (Web Dev from Left, UI/UX from Right)
  // Animate Offer Cards on Scroll
  gsap.from(".offer-card:nth-child(1)", {
    opacity: 0,
    x: -100,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".offer-card:nth-child(1)",
      start: "top 80%",
      end: "top 50%",
      scrub: 2,
      toggleActions: "play none none reverse",
    },
    overwrite: "auto", // Prevent conflicts
  });

  gsap.from(".offer-card:nth-child(2)", {
    opacity: 0,
    x: 100,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".offer-card:nth-child(2)",
      start: "top 80%",
      end: "top 50%",
      scrub: 2,
      toggleActions: "play none none reverse",
    },
    overwrite: "auto",
  });

  // Fix Hover Effect Using GSAP
  document.querySelectorAll(".offer-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  });

  // Background fade-in effect for smoother appearance
  // gsap.from(".section-5", {
  //   opacity: 0,
  //   duration: 2,
  //   ease: "power2.out",
  //   scrollTrigger: {
  //     trigger: ".section-5",
  //     start: "top 90%", // Subtle fade-in as section enters
  //     end: "top 70%",
  //     scrub: 2,
  //   },
  // });
});

//sec3 animations
var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "50% 50%",
    end: ".section-4 100%",
    scrub: 2,
    pin: true,
    markers: false,
  },
});

tl.to(
  ".top",
  {
    top: "-50%",
    ease: "power2.inOut",
  },
  "a"
)
  .to(
    ".bottom",
    {
      bottom: "-50%",
      ease: "power2.inOut",
    },
    "a"
  )
  .to(
    "#tp, #bp",
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "a"
  );

let target = 0;
let current = 0;
let ease = 0.075;
let slideCount = 5; // Updated to 5 slides
let currentSlide = 1;

const slider = document.querySelector(".slider");
const sliderWrapper = document.querySelector(".slider-wrapper");
const markerWrapper = document.querySelector(".marker-wrapper");
const activeSlide = document.querySelector(".active-slide");
const slides = document.querySelectorAll(".slide");

let maxScroll = sliderWrapper.offsetWidth - slider.offsetWidth;

function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function updateActiveSliderNumber(markerMove, markerMaxMove) {
  const partWidth = markerMaxMove / slideCount;
  let currentPart = Math.round((markerMove - 70) / partWidth) + 1;
  currentPart = Math.min(slideCount, currentPart);
  activeSlide.textContent = `${currentPart}/${slideCount}`;
  currentSlide = currentPart;

  slides.forEach((slide, index) => {
    if (index === currentPart - 1) {
      slide.style.backgroundColor = "lightblue";
    } else {
      slide.style.backgroundColor = "gray";
    }
  });
}

function update() {
  current = lerp(current, target, ease);

  gsap.set(".slider-wrapper", {
    x: -current,
  });

  let moveRatio = current / maxScroll;
  let markerMaxMove = slider.offsetWidth - markerWrapper.offsetWidth - 170;
  let markerMove = 70 + moveRatio * markerMaxMove;

  gsap.set(".marker-wrapper", {
    x: markerMove,
  });

  updateActiveSliderNumber(markerMove, markerMaxMove);

  requestAnimationFrame(update);
}

window.addEventListener("resize", () => {
  maxScroll = sliderWrapper.offsetWidth - slider.offsetWidth;
});

let isDragging = false;
let startX = 0;

slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX - current;
  slider.style.cursor = "grabbing";
});

slider.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const x = e.clientX - startX;
  target = x;
  target = Math.max(0, target);
  target = Math.min(maxScroll, target);
  if (tl && tl.scrollTrigger) {
    tl.scrollTrigger.update();
  }
});

slider.addEventListener("mouseup", () => {
  isDragging = false;
  slider.style.cursor = "grab";
});

slider.addEventListener("mouseleave", () => {
  if (isDragging) {
    isDragging = false;
    slider.style.cursor = "grab";
  }
});

update();

/*sec5*/
