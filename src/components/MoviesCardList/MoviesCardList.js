import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';

function MoviesCardList() {
    const location = useLocation();

    function renderCard(movieList) {
        return movieList.map((movie) => (
            <MoviesCard
                key={movie.movieId}
                movie={movie}
                likeMovies={handleAddMovieToSaved}
                savedMovies={savedMovies}
                checkboxFilter={checkboxFilter}
            />
        ))
    }

    return (
        <section className={'movies-cards'}>
            <ul className={`cards-list ${location.pathname === '/saved-movies' ? 'cards-list_fit' : ''}`}>

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