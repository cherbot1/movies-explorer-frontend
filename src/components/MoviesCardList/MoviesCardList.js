import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList() {
    const location = useLocation();

    return (
        <section className={'movies-cards'}>
            <ul className={`cards-list ${location.pathname === '/saved-movies' ? 'cards-list_fit' : ''}`}>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
            <button
                type='button'
                className={`movies-cards__button ${location.pathname === '/saved-movies' ? 'movies-cards__hidden' : ''}`}
            >
                Ещё
            </button>
        </section>
    );
}

export default MoviesCardList;