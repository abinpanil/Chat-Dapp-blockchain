import React from 'react'
import { useSpring, animated } from '@react-spring/web';
import styles from './Loader.module.css';

const Loader = () => {
    const cubeAnimation = useSpring({
        loop: true,
        from: { rotateY: 0 },
        to: { rotateY: 360 },
        config: { duration: 3000 },
    });

    return (
        <div className={styles.loadingContainer}>
            <div className={styles.background}></div>

            <animated.div style={cubeAnimation} className={styles.cube}>
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={`${styles.face} ${styles[`face${i + 1}`]}`} />
                ))}
            </animated.div>

            <div className={styles.typingEffect}>
                <span>Unlocking the Blockchain Constellations...</span>
            </div>
        </div>
    );
}

export default Loader