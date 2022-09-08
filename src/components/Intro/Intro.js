import React from 'react';
import './Intro.css';
import planet from '../../images/planet.svg'

function Intro () {
    return (
            <section className="intro">
                <div className="intro__description">
                    <div className="intro__text-block">
                        <h1 className="intro__title">Учебный проект студента факультета Веб-разработки.</h1>
                        <p className="intro__subtitle">Листайте нижен, чтобы узнать больше про этот проект и его создателя.</p>
                    </div>
                    <img className="intro__image" alt="Веб-планета" src={planet}/>
                </div>
                <button
                    className="intro__button"
                    type="button"
                    aria-label="Подробнее"
                    title="Подробнее"
                >
                    Узнать подробнее
                </button>
            </section>
    )
}

export default Intro;