import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';
import icon from '../../images/account-icon.svg'
import { useLocation } from 'react-router-dom';

function Navigation ({loggedIn}) {
    const location = useLocation();
    return (
        <div className="navigation">
            <Link
                to='/signup'
            >
                <button className={`navigation__button navigation__button_transparent ${loggedIn ? 'navigation__hidden' : ''}`}>
                    Регистрация
                </button>
            </Link>
            <Link
                to='/signin'
            >
            <button
                className={`navigation__button ${loggedIn ? 'navigation__hidden' : ''}`}
            >
                Войти
            </button>
            </Link>
            <Link
                to='/movies'
                className={'navigation__link'}
            >
                <button className={`navigation__button navigation__button_black-text navigation__button_films navigation__button_transparent 
                ${loggedIn ? '' : 'navigation__hidden'}
                ${location.pathname === '/' ? 'navigation__button_white-text' : ''}`}
                >
                    Фильмы
                </button>
            </Link>
            <Link
                to='/saved-movies'
                className={'navigation__link'}
            >
                <button className={`navigation__button navigation__button_black-text navigation__button_saved navigation__button_transparent 
                ${loggedIn ? '' : 'navigation__hidden'}
                ${location.pathname === '/' ? 'navigation__button_white-text' : ''}`}>
                    Сохранённые фильмы
                </button>
            </Link>
            <Link
                to='/profile'
                className={'navigation__link'}
            >
                <button className={`navigation__button navigation__button_black-text navigation__button_with-icon navigation__button_transparent 
                ${loggedIn ? '' : 'navigation__hidden'}
                ${location.pathname === '/' ? 'navigation__button_white-text' : ''}`}>
                    Аккаунт
                    <div className="navigation__icon-wrapper">
                        <img className="navigation__icon" src={icon} alt="Иконка"/>
                    </div>
                </button>
            </Link>
        </div>
    )
}

export default Navigation;