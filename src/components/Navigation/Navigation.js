import React from 'react';
import './Navigation.css';
import icon from '../../images/account-icon.svg'

function Navigation ({loggedIn, login, logOut}) {
    return (
        <div className="navigation">
            <button
                className={`navigation__button navigation__button_transparent ${loggedIn ? 'navigation__hidden' : ''}`}
                onClick={login}
            >
                Регистрация
            </button>
            <button className={`navigation__button ${loggedIn ? 'navigation__hidden' : ''}`}>
                Войти
            </button>
            <button className={`navigation__button navigation__button_black-text navigation__button_transparent ${loggedIn ? '' : 'navigation__hidden'}`}
                onClick={logOut}
            >
                Фильмы
            </button>
            <button className={`navigation__button navigation__button_black-text navigation__button_saved navigation__button_transparent ${loggedIn ? '' : 'navigation__hidden'}`}>
                Сохранённые фильмы
            </button>
            <button className={`navigation__button navigation__button_black-text navigation__button_with-icon navigation__button_transparent ${loggedIn ? '' : 'navigation__hidden'}`}>
                Аккаунт
                <div className="navigation__icon-wrapper">
                    <img className="navigation__icon" src={icon} alt="Иконка"/>
                </div>
            </button>
        </div>
    )
}

export default Navigation;