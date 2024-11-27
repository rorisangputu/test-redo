import styles from "./Lox.module.css";
import dwp from "../../assets/dwp.webp";
import frank from "../../assets/frank.png";
import urkel from "../../assets/urkel.jpeg";
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
                            height: "70px",
                            width: "250px",
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
                            height: "70px",
                            width: "250px",
                            objectFit: "cover",
                            objectPosition: "top",
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
                    Whether you&apos;re looking to enhance your brand,
                </motion.p>
                <motion.p
                    variants={SlideUp(0.3)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: false }}
                    className={styles.textLine} >
                    create dynamic content, or build interactive
                </motion.p>
                <motion.p
                    variants={SlideUp(0.3)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: false }}
                    className={styles.textLine} >
                    experiences, we bring your{" "}
                    <span className={styles.setTrend}>
                        vision to life {" "}
                        <img
                            style={{
                                height: "50px",
                                width: "50px",
                                objectFit: "cover",
                                objectPosition: "top",
                                display: "inline-flex",
                                verticalAlign: "middle",
                                borderRadius: "50px",
                            }}
                            alt="image"
                            src={frank}
                        />
                    </span>{" "}
                    with{" "}
                </motion.p>
                <motion.p
                    variants={SlideUp(0.3)}
                    initial="initial"
                    whileInView={"animate"}
                    viewport={{ once: false }}
                    className={styles.textLine} >
                    <span className={styles.results}>precision</span> and flair.
                </motion.p>
            </div>
        </div>
    );
};

export default Lox;
