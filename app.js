gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE
let firstSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    scrub: true,
    pin: true,
    markers: true,
    start: "top",
    end: "bottom",
  },
});

firstSection
  .from(".line-one span", { y: "100vh", stagger: 0.2 })
  .to(".line-one", { backgroundColor: "yellow", duration: 1 })
  .from(".sun", { x: "100vw", duration: 1 })
  .to(".sun", { x: "-100vw", duration: 1 })
  .to(".line-one", { backgroundColor: "white", duration: 1 }, "<")
  .to(".line-one span", { x: "100vw" }, "<");

let secondSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    scrub: true,
    pin: true,
    markers: true,
    start: "top",
    end: "bottom",
  },
});

secondSection.from(".line-two span:first-child", { x: "-100vw", scale: 5 });
secondSection.from(".line-two span:last-child", { x: "100vw", scale: 5 }, "<");
secondSection.to(".line-two span:first-child", { y: "-20" });
secondSection.to(".line-two span:first-child", { y: "0" });
secondSection.to(".line-two span:last-child", { y: "-20" });
secondSection.to(".line-two span:last-child", { y: "0" });

let thirdSection = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    scrub: true,
    pin: true,
    markers: true,
    start: "top",
    end: "bottom",
  },
});

thirdSection
  .from(".line-three span", { y: "100vh", stagger: 0.2 })
  .to(".line-three", { "background-position-x": "0%" })
  .from(".moon", { x: "100vw" }, "<")
  .to(".line-three span", { color: "white" }, "<");
