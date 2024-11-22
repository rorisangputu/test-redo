import { gsap } from "gsap";
import SplitTextJS from "split-text-js";


export const animatePreload = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "expo.inOut",
    },
  });

  tl.fromTo(
    "[data-preload-title]",
    {
      y: 0,
      duration: 5,
    },
    {
      y: 50,
      duration: 0.5,
    }
  );

  tl.to("[data-preload-title]", {
    y: 0,
  });
  tl.fromTo(
    "[data-text]",
    {
      autoAlpha: 1,
    },
    {
      autoAlpha: 0,
      duration: 1,
    },
    "<"
  );
  return tl;
};

export const animatePage = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.inOut",
      duration: 2,
    },
  });

  tl.fromTo(
    "[data-home-content]",
    {
      y: 1000,
    },
    {
      y: 0,
    },
    "<"
  );

  return tl;
};

export const revealText = () => {
  const tl = gsap.timeline();

  tl.fromTo(
    "[data-items]",
    {
      autoAlpha: 0,
      y: 50,
    },
    {
      autoAlpha: 1,
      y: 0,
      ease: "expo.out",
      duration: 1,
    }
  );
  tl.fromTo(
    "[data-nav-items]",
    {
      autoAlpha: 0,
      y: -50,
    },
    {
      autoAlpha: 1,
      y: 0,
      ease: "power3.out",
      duration: 2,
    },
    "<"
  );

  return tl;
};

export const textChange = () => {
  //gsap.registerPlugin(SplitText)
  const tl = gsap.timeline();

  // Find elements only if they exist in the DOM
  const firstElement = document.querySelector("[data-title-first]");
  const secondElement = document.querySelector("[data-title-second]");

  if (firstElement && secondElement) {
    // Split the text into characters
    const firstText = new SplitTextJS(firstElement, { type: "chars" });
    const secondText = new SplitTextJS(secondElement, { type: "chars" });

    // Animate the first title in
    tl.fromTo(
      firstText.chars,
      { autoAlpha: 0, rotateX: -90, y: 20 },
      { autoAlpha: 1, rotateX: 0, y: 0, duration: 0.9, stagger: 0.1, ease: "power1.out" }
    );

    // Animate the first title out
    tl.to(
      firstText.chars,
      { autoAlpha: 0, rotateX: 90, y: -20, duration: 0.3, stagger: 0.1, ease: "power1.in" },
      "+=3" // Start after the first text is fully visible
    );

    // Animate the second title in
    tl.fromTo(
      secondText.chars,
      { autoAlpha: 0, y: 20, rotateX: 90 },
      { autoAlpha: 1, duration: 0.8, y: 0, rotateX: 0, stagger: 0.1, ease: "power1.out" },
      "<1" // Start after the first animation completes
    );
  } else {
    console.warn("Elements with [data-title-first] or [data-title-second] not found");
  }


  // tl.fromTo(
  //   "[data-title-first]",
  //   {
  //     autoAlpha: 1,
  //     y: 0,
  //   },
  //   {
  //     autoAlpha: 0,
  //     duration: 2,
  //     rotateX: -90,
  //     stagger: 0.1,
  //   }
  // );

  // tl.fromTo(
  //   "[data-title-second]",
  //   {
  //     autoAlpha: 0,
  //     y: 0,
  //     //rotateX: -90,
  //     stagger: 0.1,
  //   },
  //   {
  //     autoAlpha: 1,
  //     duration: 2,
  //     //rotateX: -90,
  //   },
  //   ""
  // );

  return tl;
};
