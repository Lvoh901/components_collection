import React, { useState } from 'react';
import '../App.css';

// logo
import Logo from './Images/collectionLogo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleHamburgerClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="logo">
                <a href='/'><img src={Logo} alt="Logo Image" /></a>
            </div>

            <div className={`hamburger ${isOpen ? 'toggle' : ''}`} onClick={handleHamburgerClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li className={isOpen ? 'fade' : ''}><a href="/hero">Hero</a></li>
                <li className={isOpen ? 'fade' : ''}><a href="/about">About</a></li>
                <li className={isOpen ? 'fade' : ''}><a href="/contact">Contact</a></li>
                <li className={isOpen ? 'fade' : ''}><a href="/footer">Footer</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;