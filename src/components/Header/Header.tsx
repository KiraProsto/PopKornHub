import {Link} from "react-router-dom";
import './Header.scss'

export default function Header(){
    return(
        <header className="header">
            <Link to="/" className="header__logo">
                <img src="/popkorn.svg" alt="Логотип PopKornHub" className="header__image" />
                <h1 className="header__title">
                    PopKorn
                </h1>
            </Link>

            <nav className="header__nav" aria-label="Основная навигация">
                <Link to="/" className="header__link">
                    Home
                </Link>
                <Link to="/favorites" className="header__link">
                    Favorites
                </Link>
            </nav>
        </header>
    )
}