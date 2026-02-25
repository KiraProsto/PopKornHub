import "./Footer.scss"

export default function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer className="footer" aria-label="Подвал сайта">
            <p className="footer__text">
                © {currentYear} PopKornHub - made with 🍿 by Kira
            </p>
        </footer>
    );
}