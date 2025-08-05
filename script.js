// GSAP Animations
window.addEventListener('DOMContentLoaded', () => {
  gsap.from("header", {
    y: -100,
    duration: 1,
    opacity: 0,
    ease: "power4.out"
  });

  gsap.from(".content h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5
  });

  gsap.from(".content p", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1
  });

  gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });
});
