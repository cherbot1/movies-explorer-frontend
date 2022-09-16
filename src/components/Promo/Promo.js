import React from 'react';
import './Promo.css';
import planet from '../../images/planet.svg'

function Promo ({aboutRef}) {
    function scrollPage() {
        aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
            <section className={"promo"}>
                <div className={"promo__description"}>
                    <div className={"promo__text-block"}>
                        <h1 className={"promo__title"}>Учебный проект студента факультета <span className="promo__title_nowrap">Веб-разработки.</span></h1>
                        <p className={"promo__subtitle"}>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                        <button
                            className={"promo__button"}
                            type="button"
                            aria-label="Подробнее"
                            title="Подробнее"
                            onClick={scrollPage}
                        >
                            Узнать больше
                        </button>
                    </div>
                    <img className={"promo__image"} alt="Веб-планета" src={planet}/>
                </div>
            </section>
    )
}

export default Promo;