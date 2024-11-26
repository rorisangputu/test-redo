/* eslint-disable react/prop-types */
import { useRef, useEffect, useState } from "react";
import styles from "./Hero.module.css";
import Lox from "../Lox/Lox";
import { GoArrowDownRight } from "react-icons/go";
import gsap from "gsap";
import Work from "../Work/Work";
import Footer from "../Footer/Footer";


const Hero = ({ pageLoaded }) => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const heroMediaRef = useRef(null); // Reference to hero_media div
    const [isAnimationEnabled, setIsAnimationEnabled] = useState(false); // State to track if animation can start


    const images = [
        '/ImageHover1.png',
        '/ImageHover2.png',
        '/ImageHover3.png',
        '/ImageHover4.png',
        '/ImageHover5.png',
        '/ImageHover6.png',
        '/ImageHover7.png',
        '/ImageHover8.png',
        '/ImageHover9.png',
        '/ImageHover10.png'
    ];
    let count = 0
    let isEnabled = false;
    // Create an image element at mouse position and animate it
    const createImage = (event) => {
        const countIndex = count % images.length; // Get the correct image index
        count++;

        const image = document.createElement('img');
        image.classList.add(styles.heroMediaImage);
        image.setAttribute('src', images[countIndex]);

        heroMediaRef.current.appendChild(image);

        image.style.top = `${event.pageY - image.getBoundingClientRect().height / 2}px`;
        image.style.left = `${event.pageX - image.getBoundingClientRect().width / 1}px`;

        animateImage(image);
    };

    // Helper function to generate a random value for rotation
    const randomValue = (value) => Math.floor(Math.random() * value);

    // Animate the image using GSAP
    const animateImage = (image) => {
        gsap.set(image, {
            autoAlpha: 1,
            yPercent: 100,
            rotate: 0,
        });

        gsap.timeline()
            .to(image, {
                duration: 1.2,
                yPercent: 0,
                rotate: randomValue(-10),
                ease: 'expo.out',
            })
            .to(image, {
                duration: 2,
                autoAlpha: 0,
                yPercent: 100,
                ease: 'expo.inOut',
                onComplete: () => {
                    heroMediaRef.current.removeChild(image);
                },
            });
    };

    // window.addEventListener('mousemove', (event) => {
    //     if (!isEnabled) {
    //         isEnabled = true
    //         setTimeout(() => { isEnabled = false }, 160);
    //         createImage(event);
    //     }
    // });
    const handleMouseMove = (event) => {
        if (!isAnimationEnabled) return; // Only animate if isAnimationEnabled is true

        const rect = titleRef.current.getBoundingClientRect();
        const isInsideHero =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;

        if (isInsideHero && !isEnabled) {
            isEnabled = true;
            setTimeout(() => {
                isEnabled = false;
            }, 120);
            createImage(event);
        }
    };

    // Set up the event listener on mount and clean up on unmount
    // useEffect(() => {
    //     if (pageLoaded) {
    //         window.addEventListener("mousemove", handleMouseMove);
    //     }

    //     return () => {
    //         window.removeEventListener("mousemove", handleMouseMove);
    //     };
    // }, [pageLoaded]);

    // Set up the event listener on mount, but delay activation by 20 seconds
    useEffect(() => {
        if (pageLoaded) {
            // Set a timeout to enable mouse move listener after 20 seconds
            const timer = setTimeout(() => {
                setIsAnimationEnabled(true);
            }, 8000); // 20 seconds

            return () => clearTimeout(timer); // Clean up the timeout on unmount
        }
    }, [pageLoaded]); // Only re-run when pageLoaded changes

    // Add event listener for mouse move when animation is enabled
    useEffect(() => {
        if (isAnimationEnabled) {
            window.addEventListener("mousemove", handleMouseMove);

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };
        }
    }, [isAnimationEnabled]); // Re-run only when isAnimationEnabled changes
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <header className={styles.hero} ref={heroRef}>
                    <div className={styles.nav}>
                        <p data-nav-items className={styles.logo}>
                            LAIOTIX
                        </p>
                        <div data-nav-items className={styles.contacts}>
                            <p>+27 (0)79 863 0810</p>
                            <p>info@laiotix.com</p>
                        </div>
                    </div>
                    <div data-titles className={styles.title}>
                        <p data-title-first className={styles.heroTitle}>
                            LAIOTIX
                        </p>
                        {/* Correctly assign the ref */}
                        <p data-title-second ref={titleRef} className={styles.heroBound}>
                            INBOUND
                        </p>
                    </div>

                    <div className={styles.subcontainer}>
                        <div className={styles.subtitle}>
                            <p data-items>*</p>
                            <p data-items className={styles.subtext}>
                                Currently Redefining
                                <span data-items className={styles.subtextBlock}>
                                    the Future of Design
                                </span>
                            </p>
                        </div>
                        <div data-items className={styles.scroll}>
                            <GoArrowDownRight className={styles.scrollarrow} />
                            <p className={styles.scrolltext}>Scroll</p>
                        </div>
                    </div>
                    <div ref={heroMediaRef} className={styles.heroMedia}></div> {/* This will hold the images */}
                </header>
                <Lox />
            </div>
            <Work />
            <Footer />
        </div>
    );
};

export default Hero;
