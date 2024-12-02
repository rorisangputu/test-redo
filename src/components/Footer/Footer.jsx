import { motion } from "framer-motion";
import styles from "./Footer.module.css";
import { GoArrowUpLeft } from "react-icons/go";
import { SlideDown } from "../../Utils/framer";

const Footer = () => {
    return (
        <motion.div
            variants={SlideDown(0.3)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: false }}
            className={styles.footerContainer}>
            <div className={styles.textContainer}>
                <div className={styles.upperText}>
                    <p className={styles.Talk}>Let&apos;s talk</p>
                    <div className={styles.contacts}>
                        <p>+27 (0)79 863 0810</p>
                        <p>info@laiotix.com</p>
                    </div>
                </div>
                <div className={styles.lowerText}>
                    <div className={styles.footerText}>
                        <p>LAIOTIX</p>
                    </div>
                    <div className={styles.lowerFooterText}>
                        <div className={styles.backToTop}>
                            <GoArrowUpLeft className={styles.topArrow} />
                            <p>Back to top</p>
                        </div>
                        <div className={styles.copyright}>
                            <p className={styles.copycopy}>Copyright</p>
                            <p>&copy; Laiotix 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default Footer