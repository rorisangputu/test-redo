import gsap from "gsap";

export const revealText = () => {
    const tl = gsap.timeline();

    tl.fromTo('[data-items]', {
        autoAlpha: 0,
        y: 50,
    }, {
        autoAlpha: 1,
        y: 0,
        ease: 'expo.out',
        duration: 2,
    })
    tl.fromTo('[data-nav-items]', {
        autoAlpha: 0,
        y: -50,
    }, {
        autoAlpha: 1,
        y: 0,
        ease: 'expo.out',
        duration:2,
    }, "<")


    return tl;
}