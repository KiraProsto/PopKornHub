import {Link} from "react-router-dom";
import './Header.scss'

export default function Header(){
    return(
        <header className="header">
            <div className="header__logo">
                <img src="/popkorn.svg" alt="PopKornHub" className="header__image" />
                <h1 className="header__title">
                    PopKorn
                </h1>
            </div>

            <nav className="header__nav">
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