import styles from "./Footer.module.scss"

export default function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer className={styles.footer}>
            <p className={styles.text}>
                © {currentYear} PopKornHub - made with 🍿 by Kira
            </p>
        </footer>
    );
}