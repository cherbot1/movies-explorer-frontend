import React from 'react';
import { Link } from "react-router-dom";
import './Navigation.css';
import icon from '../../images/account-icon.svg';
import burger from '../../images/burger-icon.svg';
import { useLocation } from 'react-router-dom';
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Navigation ({loggedIn}) {
    const location = useLocation();
    const [burgerMenu, setBurgerMenu] = React.useState(false);

    function setBurger() {
        setBurgerMenu(!burgerMenu);
        console.log('открываюсь');
    }

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
            <div className={'navigation__buttons-wrapper'}>
                <Link
                    to='/movies'
                    className={'navigation__link'}
                >
                    <button className={`navigation__button navigation__button_black-text navigation__button_films navigation__button_transparent 
                    ${loggedIn ? '' : 'navigation__hidden'}
                    ${location.pathname === '/' ? 'navigation__button_white-text' : ''}
                    ${location.pathname === '/movies' ? 'navigation__underlined' : ''}`}>
                        Фильмы
                    </button>
                </Link>
                <Link
                    to='/saved-movies'
                    className={'navigation__link'}
                >
                    <button className={`navigation__button navigation__button_black-text navigation__button_saved navigation__button_transparent 
                    ${loggedIn ? '' : 'navigation__hidden'}
                    ${location.pathname === '/' ? 'navigation__button_white-text' : ''}
                    ${location.pathname === '/saved-movies' ? 'navigation__underlined' : ''}`}>
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
            <button
                className={`navigation__button-burger ${loggedIn ? '' : 'navigation__hidden'}`}
                type='button'
                onClick={setBurger}
            >
                <img
                    className={'navigation__burger-icon'}
                    src={burger}
                    alt={'Меню'}
                />
            </button>
            <div className={`navigation__burger ${burgerMenu ? 'navigation__burger_opened' : ''}`}>
                <BurgerMenu
                    closeBurger={setBurger}
                    onScreen={burgerMenu}
                />
            </div>
        </div>
    )
}

export default Navigation;