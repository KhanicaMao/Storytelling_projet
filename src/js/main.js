import gasp from "gasp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".header-parallax", {
    scrollTrigger: {
      trigger: ".header-parallax",
      start: "top 80%",
    },
    y: "-20px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".header-parallax", {
    scrollTrigger: {
      trigger: ".header-parallax",
      start: "top 80%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-1", {
    scrollTrigger: {
      trigger: ".image-1",
      start: "top 90%",
    },
    y: "-150px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-1", {
    scrollTrigger: {
      trigger: ".image-1",
      start: "top 80%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-2", {
    scrollTrigger: {
      trigger: ".image-2",
      start: "top 90%",
    },
    y: "-150px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-2", {
    scrollTrigger: {
      trigger: ".image-2",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-3", {
    scrollTrigger: {
      trigger: ".image-3",
      start: "top 80%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-3", {
    scrollTrigger: {
      trigger: ".image-3",
      start: "top 80%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-4", {
    scrollTrigger: {
      trigger: ".image-4",
      start: "top 90%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-4", {
    scrollTrigger: {
      trigger: ".image-4",
      start: "top 80%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-5", {
    scrollTrigger: {
      trigger: ".image-5",
      start: "top 90%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-5", {
    scrollTrigger: {
      trigger: ".image-5",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-6", {
    scrollTrigger: {
      trigger: ".image-6",
      start: "top 90%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-6", {
    scrollTrigger: {
      trigger: ".image-6",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-7", {
    scrollTrigger: {
      trigger: ".image-7",
      start: "top 90%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-7", {
    scrollTrigger: {
      trigger: ".image-7",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-8", {
    scrollTrigger: {
      trigger: ".image-8",
      start: "top 90%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-8", {
    scrollTrigger: {
      trigger: ".image-8",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-9", {
    scrollTrigger: {
      trigger: ".image-9",
      start: "top 80%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-9", {
    scrollTrigger: {
      trigger: ".image-9",
      start: "top 80%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-10", {
    scrollTrigger: {
      trigger: ".image-10",
      start: "top 90%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-10", {
    scrollTrigger: {
      trigger: ".image-10",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-11", {
    scrollTrigger: {
      trigger: ".image-11",
      start: "top 90%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-11", {
    scrollTrigger: {
      trigger: ".image-11",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-12", {
    scrollTrigger: {
      trigger: ".image-12",
      start: "top 90%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-12", {
    scrollTrigger: {
      trigger: ".image-12",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-13", {
    scrollTrigger: {
      trigger: ".image-13",
      start: "top 90%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-13", {
    scrollTrigger: {
      trigger: ".image-13",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-14", {
    scrollTrigger: {
      trigger: ".image-14",
      start: "top 90%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-14", {
    scrollTrigger: {
      trigger: ".image-14",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-15", {
    scrollTrigger: {
      trigger: ".image-15",
      start: "top 90%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-15", {
    scrollTrigger: {
      trigger: ".image-15",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-16", {
    scrollTrigger: {
      trigger: ".image-16",
      start: "top 90%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-16", {
    scrollTrigger: {
      trigger: ".image-16",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-17", {
    scrollTrigger: {
      trigger: ".image-17",
      start: "top 90%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-17", {
    scrollTrigger: {
      trigger: ".image-17",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-18", {
    scrollTrigger: {
      trigger: ".image-18",
      start: "top 90%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-18", {
    scrollTrigger: {
      trigger: ".image-18",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image-19", {
    scrollTrigger: {
      trigger: ".image-19",
      start: "top 90%",
    },
    y: "-200px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image-19", {
    scrollTrigger: {
      trigger: ".image-19",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  gsap.to(".image", {
    scrollTrigger: {
      trigger: ".image",
      start: "top 90%",
    },
    y: "-40px",
    duration: 1.5,
    delay: 1,
  });

  gsap.from(".image", {
    scrollTrigger: {
      trigger: ".image",
      start: "top 90%",
    },
    opacity: 0,
    duration: 2,
    delay: 1,
  });

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".header-parallax",
      start: "top top",
      end: "+=500",
      scrub: true,
    },
  });

  tl.add("parallax");

  tl.to(
    ".layer-1",
    {
      y: "10%",
    },
    "parallax"
  );

  tl.to(
    ".layer-2",
    {
      y: "70%",
    },
    "parallax"
  );

  tl.to(
    ".layer-3",
    {
      y: "3%",
    },
    "parallax"
  );
});
