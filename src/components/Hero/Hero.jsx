import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import Lox from "../Lox/Lox";
import { GoArrowDownRight } from "react-icons/go";
import gsap from "gsap";

const Hero = () => {
    const heroRef = useRef(null);
    const heroMediaRef = useRef(null); // Reference to hero_media div
    const [isEnabled, setIsEnabled] = useState(false); // Prevent multiple animations

    const images = [
        'https://images.beta.cosmos.so/4cc66fe4-2176-4fd2-ae3c-d66136ac72f9?format=jpeg',
        'https://images.beta.cosmos.so/0d579453-3393-4d40-92d0-7227da80b19c?format=jpeg',
        'https://images.beta.cosmos.so/c96bd3af-609e-4a4d-9ef8-059267837c64?format=jpeg',
        'https://images.beta.cosmos.so/0820d7b6-e8b3-49a4-a807-fe5fdaadfd2e?format=jpeg',
        'https://images.beta.cosmos.so/89e71a6e-f1b5-443b-becf-c1fc5c431df8?format=jpeg'
    ];

    let count = 0; // Index for images

    // Create an image element at mouse position and animate it
    const createImage = (event) => {
        const countIndex = (count = (count + 1) % images.length);
        const image = document.createElement('img');
        image.classList.add(styles.heroMediaImage);
        image.setAttribute('src', images[countIndex]);

        heroMediaRef.current.appendChild(image);

        image.style.top = `${event.pageY - image.getBoundingClientRect().height / 2}px`;
        image.style.left = `${event.pageX - image.getBoundingClientRect().width / 2}px`;

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

    useEffect(() => {
        // Event listener for mousemove to create images
        const handleMouseMove = (event) => {
            if (!isEnabled) {
                setIsEnabled(true);
                setTimeout(() => setIsEnabled(false), 160); // Reset after 160ms
                createImage(event);
            }
        };

        // Attach mousemove event to the window
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isEnabled]);

    return (
        <div>
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
                        <p data-title-second className={styles.heroBound}>INBOUND</p>
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
                </header>
                <Lox />
            </div>
            <div ref={heroMediaRef} className={styles.heroMedia}></div> {/* This will hold the images */}
        </div>
    );
};

export default Hero;
