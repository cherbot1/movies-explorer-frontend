import React from 'react';
import {Link} from "react-router-dom";
import './BurgerMenu.css';
import close from '../../images/icon-close.svg';
import icon from "../../images/account-icon.svg";
import {useLocation} from "react-router-dom";

function BurgerMenu ({closeBurger, onScreen}) {
    const location = useLocation();

       return (
        <section className={`burger-menu ${onScreen ? 'burger-menu_opened' : ''}`}>
            <div className={'burger-menu__navi-wrapper'}>
                <img
                    className={'burger-menu__image-close'}
                    src={close}
                    alt={'Крестик'}
                    onClick={closeBurger}
                />
                <div className={'burger-menu__buttons-wrapper'}>
                    <Link
                        to='/'
                        className={'burger-menu__link'}
                    >
                        <button className={`burger-menu__button burger-menu__button_first
                        ${location.pathname === '/' ? 'burger-menu__underlined' : ''}`}
                        >
                            Главная
                        </button>
                    </Link>
                    <Link
                        to='/movies'
                        className={'burger-menu__link'}
                    >
                        <button className={`burger-menu__button
                        ${location.pathname === '/movies' ? 'burger-menu__underlined' : ''}`}
                        >
                            Фильмы
                        </button>
                    </Link>
                    <Link
                        to='/saved-movies'
                        className={'burger-menu__link'}
                    >
                        <button className={`burger-menu__button
                        ${location.pathname === '/saved-movies' ? 'burger-menu__underlined' : ''}`}>
                            Сохранённые фильмы
                        </button>
                    </Link>
                </div>
                <div className={'burger-menu__profile-wrapper'}>
                    <Link
                        to='/profile'
                        className={'burger-menu__link burger-menu__link_account'}
                    >
                        <button className={'burger-menu__button burger-menu__button_account'}>
                            Аккаунт
                            <div className="burger-menu__icon">
                                <img className="burger-menu__icon-image" src={icon} alt="Иконка"/>
                            </div>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default BurgerMenu;