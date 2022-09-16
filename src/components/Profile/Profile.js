import React from 'react';
import './Profile.css';

function Profile({logOut, children}) {
    const userName = 'Дружочек';

    return (
        <section className="profile">
            <div className={'profile__header'}>
                {children}
            </div>
                <div className={'profile__content-wrapper'}>
                <h2 className={'profile__title'}>
                    Привет, {userName}!
                </h2>
                <form
                    className={'profile__form'}
                    name='change-profile-form'
                >
                    <div className={'profile__form-section'}>
                        <input className={'profile__form-input'} id={'name-input'}/>
                        <label htmlFor={'name-input'} className="profile__label">Имя</label>
                    </div>
                    <div className={'profile__form-section'}>
                        <input className={'profile__form-input profile__form-input_bottom'} id={'email-input'}/>
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
    );
}

export default Profile;