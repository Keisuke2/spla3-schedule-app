import React from "react";
import styles from "styles/Home.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Developed by inokei1704@gmail.com{" - "}
                This App using <a href="https://spla3.yuu26.com/">Spla3 API</a>{" - "}
            </p>
        </footer>
    );
};