import React, {useState, useEffect} from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import { getMovies } from "../../utils/MoviesApi";

function Movies({loggedIn, getUserMovies }) {
    const [isLoading, setIsLoading] = useState(false);
    const [searchNameMovie, setSearchNameMovie] = useState('');
    const [shortMovie, setShortMovie] = useState(false);
    const [allMovies, setAllMovies] = useState([]);
    const [shownCards, setShownCards] = useState([]);
    const [foundMovies, setFoundMovies] = useState([]);
    const [windowWidth, setWindowWidth] = useState();
    const [amountMovies, setAmountMovies] = useState();
    const [buttonMore, setButtonMore] = useState(false);
    const [amountNewCards, setAmountNewCards] = useState();
    const [messageActive, setMessageActive] = useState(false);
    const [messageCards, setMessageCards] = useState('Ничего не найдено');
    const [currentUser, setCurrentUser] = useState({});
    const [textError, setTextError] = useState('');
    const [saveCards, setSaveCards] = useState([]);
    const [shownSaveCards, setShownSaveCards] = useState([]);
    const [userChecked, setUserChecked] = useState(false);

    useEffect(() => {
        if (loggedIn) {
            getAllSavedMovies()
        }
    }, [loggedIn])

    function filterAndShowMovies(Movies) {
        let filteredMovies = filterMovies(Movies);
        showButtonMore(filteredMovies);
        handleAmountMovies();
        setFoundMovies(filteredMovies);
        setShownCards(filteredMovies.slice(0, amountMovies));
        setIsLoading(false);
    }

    function filterMovies(Movies) {
        let filteredMovies = Movies.filter((movie) => movie.nameRU.toLowerCase().includes(searchNameMovie.toLowerCase()));
        if (shortMovie) {
            filteredMovies = filteredMovies.filter((movie) => movie.duration <= movieDuration);
        }
        return filteredMovies
    }

    function filterSavedMovies() {
        setMessageActive(true);
        let filteredMovies = filterMovies(saveCards)
        setShownSaveCards(filteredMovies);
    }

    function saveSearchOptions(Movies) {
        let filteredMovies = filterMovies(Movies);
        localStorage.setItem('searchOptions', JSON.stringify({
            searchNameMovie: searchNameMovie,
            shortMovie: shortMovie,
            foundMovies: filteredMovies,
            shownCards: filteredMovies.slice(0, amountMovies)
        }))
    }

    function showButtonMore(item) {
        if (item.length > amountMovies) {
            setButtonMore(true);
        } else {
            setButtonMore(false);
        }
    }

    function showMovies() {
        setButtonMore(false);
        setIsLoading(true);
        setMessageActive(true);
        if (allMovies.length === 0) {
            getMovies()
                .then((res) => {
                    saveSearchOptions(res);
                    filterAndShowMovies(res);
                    setAllMovies(res);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setMessageActive(true);
                    setMessageCards(`Во время запроса произошла ошибка. 
                    Возможно, проблема с соединением или сервер недоступен. 
                    Подождите немного и попробуйте ещё раз`);
                    console.log(err.status);
                })
        } else {
            saveSearchOptions(allMovies);
            filterAndShowMovies(allMovies);
        }
        getAllSavedMovies()
    }

    function showMore() {
        setShownCards([...shownCards, ...foundMovies.slice(shownCards.length, shownCards.length + amountNewCards)]);
        if (shownCards.length + amountNewCards >= foundMovies.length) {
            setButtonMore(false);
        }
    }

    function handleAmountMovies() {
        if (windowWidth >= 1280) {
            setAmountMovies(16);
            setAmountNewCards(4);
        } else if (1280 > windowWidth && windowWidth >= 1000) {
            setAmountMovies(9);
            setAmountNewCards(3);
        } else if (1000 > windowWidth && windowWidth >= 769) {
            setAmountMovies(8);
            setAmountNewCards(2);
        } else {
            setAmountMovies(5);
            setAmountNewCards(2);
        }
    }

    function windowResize() {
        setWindowWidth(document.documentElement.clientWidth);
        handleAmountMovies();
    }

    window.onresize = windowResize;

    setTimeout(windowResize, 0);

    function handleTextError(err) {
        err.text()
            .then((res) => {
                setTextError(JSON.parse(res).message)
            })
        setTimeout(() => setTextError(''), 4000);
    }

    function handleLikeMovies(
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
    ) {
        let isLike = saveCards.some((card) => card.movieId === movieId)
        const saveCard = saveCards.find((card) => card.movieId === movieId)
        changeLikeMovie(
            country,
            director,
            duration,
            year,
            description,
            image,
            trailerLink,
            nameRU,
            nameEN,
            thumbnail,
            movieId,
            isLike,
            saveCard
        )
            .then((res) => {
                getAllSavedMovies();
            })
            .catch((err) => {
                console.log(err)
            })
    }

    function getAllSavedMovies() {
        getAllSavedMovies()
            .then((res) => {
                setSaveCards(res);
                setShownSaveCards(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function returnToMovies() {
        const searchOptions = JSON.parse(localStorage.getItem('searchOptions'));
        if (searchOptions === null) {
            return
        }
        setShownCards(searchOptions.foundMovies.slice(0, amountMovies));
        setSearchNameMovie(searchOptions.searchNameMovie);
        setShortMovie(searchOptions.shortMovie);
        setFoundMovies(searchOptions.foundMovies);
        showButtonMore(searchOptions.foundMovies);
        setMessageActive(true);
    }

    function handleShortMovie() {
        setShortMovie(!shortMovie);
    }

    return (
        <>
            <Header
                loggedIn={loggedIn}
            />
            <section className="movies">
                <SearchForm
                    searchNameMovie={searchNameMovie}
                    setSearchNameMovie={setSearchNameMovie}
                    shortMovie={shortMovie}
                    setShortMovie={handleShortMovie}
                    onSubmit={showMovies}
                />
                {isLoading ?
                    ( <Preloader/> ) :
                    ( <MoviesCardList
                        more={buttonMore}
                        shownCards={shownCards}
                        showMore={showMore}
                        messageActive={setMessageActive}
                        messageCards={messageCards}
                        handleLikeMovies={handleLikeMovies}
                        saveCards={saveCards}
                    />) }

            </section>
            <Footer />
        </>
    );
}

export default Movies;