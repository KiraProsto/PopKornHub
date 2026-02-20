import {Link} from "react-router-dom";
import styles from './Header.module.scss'

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/popkorn.svg" alt="Логотип PopKornHub" className={styles.image} />
                <h1 className={styles.title}>
                    PopKorn
                </h1>
            </div>

            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>
                    Home
                </Link>
                <Link to="/favorites" className={styles.link}>
                    Favorites
                </Link>
            </nav>
        </header>
    )
}