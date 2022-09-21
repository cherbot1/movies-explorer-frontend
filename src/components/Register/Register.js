import React from 'react';
import EntryForm from "../EntryForm/EntryForm";
import './Register.css';

function Register({register}) {
    const [registerValues, setRegisterValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const [submitButtonGreen, setSubmitButtonGreen] = React.useState(true);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setRegisterValues({...registerValues, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
        setSubmitButtonGreen(isValid);
    };

    function onSubmit(event) {
        event.preventDefault();
        register(registerValues);
    }

    return (
        <EntryForm
            name = 'register'
            title = 'Добро пожаловать!'
            buttonText = 'Зарегистрироваться'
            onSubmit={onSubmit}
            submitButtonGreen={submitButtonGreen}
            isValid={isValid}
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
                required
            />
            <span
                id="email-input-error"
                className="name-input-error entry__input-error"
            >
                {errors.name}
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
                required
            />
            <span
                id="email-input-error"
                className="email-input-error entry__input-error"
            >
                {errors.email}
            </span>
            <label htmlFor={'register-name-input'} className="entry__label">Пароль</label>
            <input
                type="password"
                name='password'
                id='password-input'
                className="entry__input entry-register__input entry-register__input_password"
                placeholder="Ваш пароль"
                minLength="4"
                onChange={handleChange}
                required
            />
            <span
                id='password-input-error'
                className="password-input-error entry__input-error"
            >
                {errors.password}
            </span>
        </EntryForm>
    );
}

export default Register;