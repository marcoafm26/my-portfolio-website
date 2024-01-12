// import React from 'react';
import LogoImg from '../../assets/logo-portfolio.png';
import './footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">
                    <img src={LogoImg} alt="" />
                </h1>
                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">
                            Skills
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://www.instagram.com/marcoaureliomoreira/"
                        className="home__social-icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="uil uil-instagram"></i>
                    </a>
                    <a
                        href="https://github.com/marcoafm26"
                        className="home__social-icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/marcoaureliofm/"
                        className="home__social-icon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
