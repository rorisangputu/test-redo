import styles from "./Lox.module.css";
import dwp from "../../assets/Lox2.png";
import urkel from "../../assets/Lox1.png";
import { motion } from 'framer-motion'
import { SlideUp } from "../../Utils/framer";


const Lox = () => {


    return (
        <div className={styles.Lox}>
            <div className={styles.LoxText}>
                <motion.p
                    variants={SlideUp(0.3)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: false }}
                    className={styles.textLine} >
                    At Laiotix, we don&apos;t just follow trends —{" "}
                    <span className={styles.setTrend}>we set them.</span>
                </motion.p>
                <motion.p
                    variants={SlideUp(0.3)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: false }}
                    className={styles.textLine} >
                    <img
                        style={{
                            height: "80px",
                            width: "300px",
                            objectFit: "cover",
                            objectPosition: "top",
                            display: "inline-flex",
                            verticalAlign: "middle",
                            borderRadius: "50px",
                        }}
                        alt="image"
                        src={urkel}
                    />{" "}
                    Our team of skilled designers and strategists
                </motion.p>
                <motion.p
                    variants={SlideUp(0.3)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: false }}>
                    are dedicated to delivering{" "}
                    <span className={styles.results}>exceptional results</span>
                    {" "} through a{" "}
                </motion.p>
                <motion.p variants={SlideUp(0.3)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: false }}
                    className={styles.textLine} >

                    <span className={styles.fearless}>fearless approach</span> {" "}
                    <img
                        style={{
                            height: "80px",
                            width: "300px",
                            objectFit: "cover",
                            objectPosition: "center",
                            display: "inline-flex",
                            verticalAlign: "middle",
                            borderRadius: "50px",
                        }}
                        alt="image"
                        src={dwp}
                    />{" "}to{" "}
                    <span className={styles.creativity}>
                        creativity{" "}

                        innovation.
                    </span>{" "}
                </motion.p>
                <motion.p variants={SlideUp(0.3)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: false }}
                    className={styles.textLine} >
                    Whether you&apos;re looking to enhance your brand, create
                </motion.p>
                <motion.p
                    variants={SlideUp(0.3)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: false }}
                    className={styles.textLine} >
                    dynamic content, or build interactive experiences,
                </motion.p>
                <motion.p
                    variants={SlideUp(0.3)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: false }}
                    className={styles.textLine} >
                    we bring your{" "}
                    <span className={styles.setTrend}>
                        vision to life {" "}
                    </span>{" "}
                    with <span className={styles.results}>precision</span> and flair.
                </motion.p>

            </div>
        </div>
    );
};

export default Lox;
