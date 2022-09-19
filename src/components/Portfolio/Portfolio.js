import React from 'react';
import './Portfolio.css';
import arrow from '../../images/arrow-portfolio.svg'

function Portfolio () {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">
                Портфолио
            </h3>
            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <a className="portfolio__link"
                       href={'https://github.com/cherbot1'}
                       target={"_blank"}
                    >
                        <h4 className="portfolio__li-title">
                            Статичный сайт
                        </h4>
                        <img className="portfolio__arrow"
                             alt="Стрелка"
                             src={arrow}
                        />
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a className="portfolio__link"
                       href={'https://github.com/cherbot1'}
                       target={"_blank"}
                    >
                        <h4 className="portfolio__li-title">
                            Адаптивный сайт
                        </h4>
                        <img className="portfolio__arrow"
                             alt="Стрелка"
                             src={arrow}
                        />
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a className="portfolio__link portfolio__link_no-border"
                       href={'https://github.com/cherbot1'}
                       target={"_blank"}
                    >
                        <h4 className="portfolio__li-title">
                            Одностраничное приложение
                        </h4>
                        <img className="portfolio__arrow"
                             alt="Стрелка"
                             src={arrow}
                        />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Portfolio;