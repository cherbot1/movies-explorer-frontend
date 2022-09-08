import React from 'react';
import { Route, Switch } from "react-router-dom";
import './Navigation.css';

function Navigation () {
    return (
        <div className="navigation">
            <Switch>
                <Route exact path="/">
                    <button className="navigation__button navigation__button_transparent">
                        Регистрация
                    </button>
                    <button className="navigation__button navigation__button">
                        Войти
                    </button>
                </Route>
            </Switch>
        </div>
    )
}

export default Navigation;