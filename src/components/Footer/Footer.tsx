import styles from "./Footer.module.scss"

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <p className={styles.text}>
                © 2026 PopKornHub - made with 🍿 by Kira
            </p>
        </footer>
    );
}