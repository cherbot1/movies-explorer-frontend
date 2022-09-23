import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { getMovies } from "../../utils/MoviesApi";

function Movies({loggedIn}) {
    const [searchRequest, setSearchRequest] = React.useState('');
    const [allMovies, setAllMovies] = React.useState([]);
    const [foundMovies, setFoundMovies] = React.useState({});
    const [preloader, showPreloader] = React.useState(false);
    const [checkBox, setCheckBox] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [moreButton, setMoreButton] = React.useState(false);
    const [moviesAmount, setMoviesAmount] = React.useState('');
    const [windowResolution, setWindowResolution] = React.useState();
    const [cardsAmount, setCardsAmount] = React.useState();
    const [newCardsAmount, setNewCardsAmount] = React.useState();
    const [cardsOnScreen, setCardsOnScreen] = React.useState([]);

    function handleShortMovie() {
        setCheckBox(!checkBox);
        console.log('shortMovie');
    }

    function filterMovies(movies) {
        let filteredMovies = movies.filter((movie) =>
            movie.nameRU.toLowerCase().includes(searchRequest.toLowerCase()
            ));

        if (checkBox) {
            filteredMovies = filteredMovies.filter((movie) => movie.duration <= 40);
        }

        return filteredMovies
    }

    function filterAndShowMovies(movies) {
        const filteredMovies = filterMovies(movies);

        showButtonMore(filteredMovies);
        handleCardsAmount();
        setFoundMovies(filteredMovies);
        setCardsOnScreen(filteredMovies.slice(0, moviesAmount));
        showPreloader(false);
    }

    function saveSearchRequest(movies) {
        let filteredMovies = filterMovies(movies);

        localStorage.setItem('searchRequestName', searchRequest);
        localStorage.setItem('shortMovie', checkBox);
        localStorage.setItem('foundMovies', filteredMovies);
        localStorage.setItem('cardsOnScreen', filteredMovies.slice(0, moviesAmount));
    }

    function submitSearchForm() {
        setMoreButton(false);
        showPreloader(true);
        /* setMessageActive(true); */

        if (allMovies.length === 0) {
            getMovies()
                .then((movies) => {
                    saveSearchRequest(movies);
                    filterAndShowMovies(movies);
                    setAllMovies(movies);
                })
                .catch((err) => {
                    showPreloader(false);
                    /* setMessageActive(true); */
                    console.log(err.status);
                })
        } else {
            saveSearchRequest(allMovies);
            filterAndShowMovies(allMovies);
        }
    }

    function handleCardsAmount() {
        if (windowResolution >= 1280) {
            cardsAmount(12);
            newCardsAmount(4);
        } else if (1280 > windowResolution && windowResolution >= 1000) {
            cardsAmount(12);
            newCardsAmount(3);
        } else if (1000 > windowResolution && windowResolution >= 768) {
            cardsAmount(8);
            newCardsAmount(2);
        } else {
            cardsAmount(5);
            newCardsAmount(2);
        }
    }

    function showButtonMore(item) {
        if (item.length > moviesAmount) {
            setMoreButton(true);
        } else {
            setMoreButton(false);
        }
    }

    function showMore() {
        setCardsOnScreen(
            [...cardsOnScreen, ...foundMovies.slice(cardsOnScreen.length, cardsOnScreen.length + newCardsAmount)]
        );

        if (cardsOnScreen.length + newCardsAmount >= foundMovies.length) {
            setMoreButton(false);
        }
    }

    return (
        <>
            <Header
                loggedIn={loggedIn}
            />
            <section className="movies">
                <SearchForm
                    searchRequest={searchRequest}
                    setSearchRequest={setSearchRequest}
                    checkBox={checkBox}
                    handleShortMovie={handleShortMovie}
                    submitSearchForm={submitSearchForm}
                />
                {preloader ? ( <Preloader/> ) : ( <MoviesCardList />) }

            </section>
            <Footer />
        </>
    );
}

export default Movies;