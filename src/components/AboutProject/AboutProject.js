import React from 'react';
import './AboutProject.css';

function AboutProject ({children}) {
    return (
        <section className="about-project">
            {children}
            <ul className="about-project__text-list text-list">
                <li className="text-list__item">
                    <h3 className="text-list__title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="text-list__text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </li>
                <li className="text-list__item">
                    <h3 className="text-list__title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="text-list__text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </li>
            </ul>
            <ul className="about-project__visualization visualization">
                <li className="visualization__item">
                    <div className="visualization__graph">
                        <p className="visualization__graph-text">1 неделя</p>
                    </div>
                    <p className="visualization__item-text">Back-end</p>
                </li>
                <li className="visualization__item visualization__item_grey">
                    <div className="visualization__graph visualization__graph_grey">
                        <p className="visualization__graph-text">4 недели</p>
                    </div>
                    <p className="visualization__item-text">Front-end</p>
                </li>
            </ul>
        </section>
    )
}

export default AboutProject;