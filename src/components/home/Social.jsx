// import React from 'react';
import './home.css';

const Social = () => {
    return (
        <div className="home__social">
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
    );
};

export default Social;
