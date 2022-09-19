import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header ({loggedIn, login}) {
    const location = useLocation();

    return (
        <header className={`header ${location.pathname === '/' ? '' : 'header_white'}`}>
            <Link to='/'>
                <img className="header__logo" src={logo} alt="Логотип"/>
            </Link>
            <Navigation
                login={login}
                loggedIn={loggedIn}
            />
        </header>
    )
}

export default Header;
