import { useEffect, useRef, useState } from 'react';
import styles from './Loader.module.css';
import { gsap } from 'gsap';
import { animatePage, animatePreload, revealText, textChange } from './LoaderAnimations';
import Hero from '../Hero/Hero';



const Loader = () => {
    const loaderRef = useRef(null)
    const timeline = useRef(gsap.timeline());
    const [pageLoaded, setPageLoaded] = useState(false);
    useEffect(() => {
        const context = gsap.context(() => {
            const tl = timeline.current;
            tl
                .add(animatePreload())
                .add(animatePage(), "<")
                .add(textChange()) // Notify when textChange completes
                .add(revealText(), "<1.5");

            setPageLoaded(true);
        }, loaderRef);

        return () => context.revert();
    })

    return (
        <div className={styles.loader} ref={loaderRef}>
            <div data-preload-title className={styles.preload}>
                <p data-items>*</p>
                <p data-items className={styles.subtext}>
                    Currently Redefining the Future of Design
                </p>
            </div>
            <div data-home-content className={styles.page}>
                <Hero pageLoaded={pageLoaded} />

            </div>
        </div >
    )
}

export default Loader