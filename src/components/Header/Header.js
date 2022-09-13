import React from 'react';
import logo from '../../images/logo.png';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header ({loggedIn, login, logOut}) {
    return (
        <header className={`header ${loggedIn ? 'header_white' : ''}`}>
            <a href={'/'} className="header__link">
                <img className="header__logo" src={logo} alt="Логотип"/>
            </a>
            <Navigation
                login={login}
                loggedIn={loggedIn}
                logOut={logOut}
            />
        </header>
    )
}

export default Header;
