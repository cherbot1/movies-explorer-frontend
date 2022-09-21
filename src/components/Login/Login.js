import React from 'react';
import EntryForm from "../EntryForm/EntryForm";
import './Login.css';

function Login({login}) {
    const [loginValues, setLoginValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);
    const [submitButtonGreen, setSubmitButtonGreen] = React.useState(true);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        setLoginValues({...loginValues, [name]: value});
        setErrors({...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
        setSubmitButtonGreen(isValid);
    };

    function onSubmit(event) {
        event.preventDefault();
        login(loginValues);
    }

    return (
        <EntryForm
            name = 'login'
            title = 'Рады видеть'
            buttonText = 'Войти'
            onSubmit={onSubmit}
            isValid={isValid}
            submitButtonGreen={submitButtonGreen}
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
                required
            />
            <span
                id="email-input-error"
                className="email-input-error entry__input-error"
            >
                    {errors.email}
                </span>
            <label htmlFor={'login-password-input'} className="entry__label">Пароль</label>
            <input
                type="password"
                name='password'
                id='login-password-input'
                className="entry__input entry-register__input entry-register__input_password"
                placeholder="Пароль"
                onChange={handleChange}
                required
                autoComplete="new-password"
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

export default Login;