import gsap from 'gsap';
import styles from './Work.module.css';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import work1 from "../../assets/Work1.png";
import work2 from "../../assets/Work2.png";
import work3 from "../../assets/Work3.png";
import { motion } from 'framer-motion';
import { SlideUp } from '../../Utils/framer';

gsap.registerPlugin(ScrollTrigger);


const Work = () => {

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: `.${styles.workImages}`, // Trigger when `.workImages` comes into view
                start: "top 40%",
                end: "bottom 110%",
                scrub: true, // Smooth animation on scroll

            },

        })
            .to(`.${styles.imageOne}`, {
                x: '-150%', // Move to the left
                y: '38%', // Align vertically
                rotate: 0, // Reset rotation
                ease: "expo.out"
            })
            .to(`.${styles.imageTwo}`, {
                x: '50%', // Center horizontally
                y: '-23.5%', // Align vertically
                rotate: 0, // Reset rotation
                ease: "expo.out"
            }, "<") // Align this animation with the previous one
            .to(`.${styles.imageThree}`, {
                x: '50%', // Move to the right
                y: '-7%', // Align vertically
                rotate: 0, // Reset rotation
                ease: "expo.out"
            }, "<"); // Align this animation with the previous ones

        // gsap.timeline({
        //     scrollTrigger: {
        //         trigger: `.${styles.workTextContainer}`,
        //         start: "top 40%",
        //         end: "bottom 200%",

        //         markers: true,
        //     },
        // })
        //     .fromTo(
        //         `.${styles.workText} h1`,
        //         { opacity: 0, y: 100 },
        //         { opacity: 1, y: 0, ease: "power3.inOut", duration: 0.6 }
        //     );


    }, []);


    return (
        <div className={styles.workContainer}>
            <div className={styles.workTextContainer}>
                <div className={styles.workText}>
                    <motion.h1
                        variants={SlideUp(0.3)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: true }}
                    >Want to see</motion.h1>
                    <motion.div
                        variants={SlideUp(0.4)}
                        initial="initial"
                        whileInView={"animate"}
                        viewport={{ once: true }}
                        className={styles.workLineTwo}>
                        <i className="las la-long-arrow-alt-right" ></i>
                        <h1>our <span className={styles.cursiveWork}>work?</span></h1>
                    </motion.div>
                </div>
            </div>
            <div className={styles.workImages}>
                <div className={styles.imageCollage}>
                    <div className={`${styles.imageContainer} ${styles.imageOne}`}>
                        <img src={work3}
                            alt="Design 1" />
                    </div>
                    <div className={`${styles.imageContainer} ${styles.imageTwo}`}>
                        <img src={work2}
                            alt="Design 2" />
                    </div>
                    <div className={`${styles.imageContainer} ${styles.imageThree}`}>
                        <img src={work1}
                            alt="Design 3" />
                    </div>
                </div>
            </div>
            <hr className={styles.horizontalRule} />
        </div>
    )
}

export default Work