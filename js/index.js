gsap.registerPlugin(ScrollTrigger);

let masks = gsap.utils.toArray(".img-mask");

masks.forEach((image, i) => {
  ScrollTrigger.create({
    trigger: image,
    start: "top top",
    pin: true,
    end: 'bottom top',
    pinSpacing: false,
  })
});