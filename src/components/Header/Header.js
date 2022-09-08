import React from 'react';
import logo from '../../images/logo.png';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header () {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип"/>
            <Navigation />
        </header>
    )
}

export default Header;
