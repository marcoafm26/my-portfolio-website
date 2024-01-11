// import React from 'react';
import './scrollup.css';
const ScrollUp = () => {
    const verifyActualPositionY = () => {
        const scrollUp = document.querySelector('.scrollup');
        if (scrollY >= 400) {
            scrollUp.classList.add('show-scroll');
        } else {
            scrollUp.classList.remove('show-scroll');
        }
    };

    document.addEventListener('scroll', () => verifyActualPositionY());
    return (
        <a href="#home" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    );
};

export default ScrollUp;
