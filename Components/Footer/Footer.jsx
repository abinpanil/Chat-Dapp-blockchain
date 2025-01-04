import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.appName}>BlockChat</div>
            <nav className={styles.nav}>
                <a href="#about" className={styles.link}>
                    About
                </a>
                <a href="#features" className={styles.link}>
                    Features
                </a>
                <a href="#contact" className={styles.link}>
                    Contact
                </a>
            </nav>
            <div className={styles.socialIcons}>
                <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.icon}
                >
                    <i className="fab fa-github"></i>
                </a>
                <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.icon}
                >
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
