import React from 'react';
import EntryForm from "../EntryForm/EntryForm";
import './Login.css';

function Login({login}) {
    const [userData, setUserData] = React.useState({ password: '', email: ''});

    function handleChange(e) {
        const { name, value } = e.target;

        setUserData({
            ...userData,
            [name]: value
        });
    };

    return (
        <EntryForm
            name = 'login'
            title = 'Рады видеть'
            buttonText = 'Войти'
            onSubmit={login}
        >
            <label htmlFor={'login-email-input'} className="entry__label">E-mail</label>
            <input
                type="email"
                name='email'
                id="login-email-input"
                className="entry__input entry-register__input entry-register__input_email"
                placeholder="Email"
                minLength="2"
                maxLength="30"
                onChange={handleChange}
                value={userData.email}
            />
            <span
                id="email-input-error"
                className="email-input-error entry__input-error entry__input-error_hidden"
            >
                Что-то пошло не так...
            </span>
            <label htmlFor={'login-password-input'} className="entry__label">Пароль</label>
            <input
                type="password"
                name='password'
                id='login-password-input'
                className="entry__input entry-register__input entry-register__input_password"
                placeholder="Пароль"
                onChange={handleChange}
                value={userData.password}
            />
            <span
                id='password-input-error'
                className="password-input-error entry__input-error entry__input-error_hidden"
            >
                Что-то пошло не так...
            </span>
        </EntryForm>
    );
}

export default Login;