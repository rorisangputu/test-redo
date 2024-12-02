/* eslint-disable react/prop-types */

import styles from "./Hero.module.css";
import Lox from "../Lox/Lox";
import { GoArrowDownRight } from "react-icons/go";

import Work from "../Work/Work";
import Footer from "../Footer/Footer";
import { useEffect, useRef, useState } from "react";
import img1 from '../../assets/ImageHover1.png'
import img2 from '../../assets/ImageHover2.png'
import img3 from '../../assets/ImageHover3.png'
import img4 from '../../assets/ImageHover4.png'
import img5 from '../../assets/ImageHover5.png'
import img6 from '../../assets/ImageHover6.png'
import img7 from '../../assets/ImageHover7.png'
import img8 from '../../assets/ImageHover8.png'
import img9 from '../../assets/ImageHover9.png'
import img10 from '../../assets/ImageHover10.png'


const Hero = () => {
    const heroRef = useRef(null);
    const [showImages, setShowImages] = useState(false);

    useEffect(() => {
        // Delay the visibility of hover images
        const timer = setTimeout(() => {
            setShowImages(true);
        }, 8000); // Adjust the time based on your animation duration (in ms)

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

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
                        <div className={styles.hoverDiv}>
                            <p data-title-second className={styles.heroBound}>INBOUND</p>
                            {showImages && ( // Conditionally render the hover images
                                <div className={styles.hoverImages}>
                                    {imageLinks.map((image, index) => (
                                        <div key={index} className={`${styles.imageContainers} ${styles[image.style]}`}>
                                            <img src={image.src} alt={`Image ${index + 1}`} />
                                        </div>

                                    ))}
                                </div>
                            )}
                        </div>
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
                    {/* <div ref={heroMediaRef} className={styles.heroMedia}></div> This will hold the images */}
                </header>
                <Lox />
            </div>
            <Work />
            <Footer />
        </div>
    );
};

export default Hero;


const imageLinks = [
    { src: img1, style: "firstImg" },
    { src: img2, style: "sndImg" },
    { src: img3, style: "thirdImg" },
    { src: img4, style: "fourthImg" },
    { src: img5, style: "fifthImg" },
    { src: img6, style: "sixthImg" },
    { src: img7, style: "seventhImg" },
    { src: img8, style: "eighthImg" },
    { src: img9, style: "ninthImg" },
    { src: img10, style: "tenthImg" },
    { src: img1, style: "eleventhImg" },
    { src: img2, style: "twelfthImg" },
    { src: img3, style: "thirteenthImg" },
    { src: img4, style: "fourteenthImg" },
    { src: img5, style: "fifteenthImg" },
    { src: img6, style: "sixteenthImg" },
    { src: img7, style: "seventeenthImg" },
    { src: img8, style: "eighteenthImg" },
    { src: img9, style: "nineteenthImg" },
    { src: img10, style: "twentiethImg" },
];