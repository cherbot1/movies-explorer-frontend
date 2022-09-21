import React from 'react';
import './Profile.css';
import Header from "../Header/Header";
import { CurrentUserContext } from '../../contexts/CurrentUserContext'

function Profile({changeInfo, children, loggedIn, logOut}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState(currentUser.name);
    const [email, setEmail] = React.useState(currentUser.email);

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }

    function onSubmit(event) {
        event.preventDefault();
        changeInfo({
            name: name,
            email: email
        });
    }

    return (
        <>
            <Header
                loggedIn={loggedIn}
            />
            <section className="profile">
                <div className={'profile__header'}>
                    {children}
                </div>
                    <div className={'profile__content-wrapper'}>
                    <h2 className={'profile__title'}>
                        Привет, {currentUser.name}!
                    </h2>
                    <form
                        className={'profile__form'}
                        name='change-profile-form'
                        onSubmit={onSubmit}
                    >
                        <div className={'profile__form-section'}>
                            <input
                                className={'profile__form-input'}
                                id={'name-input'}
                                name={'name-input'}
                                value={name}
                                onChange={handleNameChange}
                                required
                            />
                            <label htmlFor={'name-input'} className="profile__label">Имя</label>
                        </div>
                        <div className={'profile__form-section'}>
                            <input
                                className={'profile__form-input profile__form-input_bottom'}
                                id={'email-input'}
                                name={'email-input'}
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                            <label htmlFor={'email-input'} className="profile__label profile__label_bottom">E-mail</label>
                        </div>
                        <button
                            type="submit"
                            className={'profile__submit-button'}
                        >
                            Редактировать
                        </button>
                    </form>
                    <button
                        type='button'
                        className={'profile__logout-button'}
                        onClick={logOut}
                    >
                        Выйти из аккаунта
                    </button>
                </div>
            </section>
        </>
    );
}

export default Profile;