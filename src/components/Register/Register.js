import React from 'react';
import EntryForm from "../EntryForm/EntryForm";
import './Register.css';

function Register({register}) {
    const [userData, setUserData] = React.useState({ name: '', email: '', password: 'ergergerge' });

    function handleChange(e) {
        const { name, value } = e.target;

        setUserData({
            ...userData,
            [name]: value
        });
    }

    return (
        <EntryForm
            name = 'register'
            title = 'Добро пожаловать!'
            buttonText = 'Зарегистрироваться'
            onSubmit={register}
        >
            <label htmlFor={'register-name-input'} className="entry__label">Имя</label>
            <input
                type="text"
                name='name'
                id="register-name-input"
                className="entry__input entry-register__input entry-register__input_name"
                placeholder="Ваше имя"
                minLength="2"
                maxLength="30"
                onChange={handleChange}
                value={userData.name}
            />
            <span
                id="email-input-error"
                className="name-input-error entry__input-error entry__input-error_hidden"
            >
                Что-то пошло не так...
            </span>
            <label htmlFor={'register-name-input'} className="entry__label">E-mail</label>
            <input
                type="email"
                name='email'
                id="register-email-input"
                className="entry__input entry-register__input entry-register__input_email"
                placeholder="Ваш е-mail"
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
            <label htmlFor={'register-name-input'} className="entry__label">Пароль</label>
            <input
                type="password"
                name='password'
                id='password-input'
                className="entry__input entry-register__input entry-register__input_password entry__input_error"
                placeholder="Ваш пароль"
                onChange={handleChange}
                value={userData.password}
            />
            <span
                id='password-input-error'
                className="password-input-error entry__input-error"
            >
                Что-то пошло не так...
            </span>
        </EntryForm>
    );
}

export default Register;