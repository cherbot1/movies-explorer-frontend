import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
            <div className="footer__links-block">
                <p className="footer__copyright">&#169; {(new Date().getFullYear())}</p>
                <ul className="footer__links-list">
                    <li className="footer__link-item">
                        <a className="footer__link"
                           href={'https://practicum.yandex.ru'}
                        >
                            Яндекс.Практикум
                        </a>
                    </li>
                    <li className="footer__link-item">
                        <a className="footer__link"
                           href={'https://github.com/cherbot1/movies-explorer-frontend/'}
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
