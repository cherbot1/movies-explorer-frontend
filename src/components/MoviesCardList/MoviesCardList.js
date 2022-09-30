import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({more, shownCards, showMore, messageActive, handleLikeMovies, saveCards}) {
    return (
        <section className={'movies-cards'}>
            <ul className={`cards-list ${more ? 'cards-list_fit' : ''}`}>
                {shownCards.length === 0 ?
                    <p className={`movies-cards__empty-message ${messageActive ? '' : 'movies-cards__empty-message_hidden'}`}>Ничего не найдено</p> :
                    shownCards.map((card) => (
                        <MoviesCard
                            cardData = {card}
                            saveCards={saveCards}
                            handleLikeMovies={handleLikeMovies}
                            key={card.id}
                        />
                    ))
                }
            </ul>
            <button
                type='button'
                className={`movies-cards__button ${more ? 'movies-cards__hidden' : ''}`}
                onClick={showMore}
            >
                Ещё
            </button>
        </section>
    );
}

export default MoviesCardList;