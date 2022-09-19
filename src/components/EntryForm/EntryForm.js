import React from 'react';
import { Link, Route } from "react-router-dom";
import logo from "../../images/logo.svg";
import './EntryForm.css';

function EntryForm({name, title, onSubmit, children, buttonText}) {

    return (
        <section className={'entry'}>
            <Link to='/'>
                <img className="entry__logo" src={logo} alt="Логотип"/>
            </Link>
            <h2 className={'entry__title'}>{title}</h2>
            <form
                name={`${name}_form`}
                className={`entry__form entry-${name}__form`}
                onSubmit={onSubmit}
            >
                {children}
                <button
                    type="submit"
                    aria-label={`${buttonText}`}
                    className={`entry__save-button entry-${name}__save-button`}
                >{buttonText}</button>
            </form>
            <Route path="/signup">
                <Link
                    to='/signin'
                    className={`entry__link entry__link_signin`}
                >
                    Уже зарегистрированы? <span className={'entry__link-text'}>Войти</span>
                </Link>
            </Route>
            <Route path="/signin">
                <Link
                    to='/signup'
                    className={`entry__link`}
                >
                   Ещё не зарегистрированы? <span className={'entry__link-text'}>Регистрация</span>
                </Link>
            </Route>
        </section>
    );
}

export default EntryForm;