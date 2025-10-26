gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let masks = gsap.utils.toArray(".img-mask");

masks.forEach((image, i) => {
  ScrollTrigger.create({
    trigger: image,
    start: "top top",
    pin: true,
    end: "bottom top",
    pinSpacing: false,
    scrub: 1,
    snap: {
      snapTo: 1,
      duration: 1.5,
      ease: "power4.out",
    }
  });
});