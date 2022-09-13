import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
    return (
        <section className={'movies-cards'}>
            <ul className={'cards-list'}>
                <MoviesCard />
            </ul>
        </section>
    );
}

export default MoviesCardList;