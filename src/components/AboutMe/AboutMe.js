import React from 'react';
import './AboutMe.css';
import headShot from '../../images/KOS03077.JPG';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe ({children}) {
    return (
        <section className="about-me">
            {children}
            <div className="about-me__main-content">
                <div className="about-me__text-block">
                    <div className="about-me__description">
                        <h2 className="about-me__title">
                            Олег
                        </h2>
                        <p className="about-me__subtitle">
                            Фронтенд-разработчик, 30 лет
                        </p>
                        <p className="about-me__text">
                            Я родился и живу в Москве, закончил Московский Универистет им. Витте по специальности
                            "Государственное и муниципальное управление". У меня есть жена и дочь. Увлекаюсь бегом и волейболом.
                            Пробовал кодить ещё в 2014 году, но решил всё же работать по специальности. В 2019 году вернулся к идее
                            связать свою жизнь с программированием. Брал небольшие работы на фрилансе, практиковался, повышал скилл.
                            С ноября 2022 года работаю администратором маркетплейса на CS-Cart.
                        </p>
                    </div>
                    <a className="about-me__link"
                        href={'https://github.com/cherbot1'}
                    >
                        GitHub
                    </a>
                </div>
                <div className="about-me__image-wrapper">
                    <img className="about-me__image"
                         src={headShot}
                         alt="Фотография"
                    />
                </div>
            </div>
            <Portfolio />
        </section>
    )
}

export default AboutMe;