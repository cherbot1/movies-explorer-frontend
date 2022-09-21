import React, {useState} from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies({loggedIn}) {
    const [movies, setMovies] = ([]);
    const [preloader, setPreloader] = useState(false);
    const [error, setError] = useState('');


    return (
        <>
            <Header
                loggedIn={loggedIn}
            />
            <section className="saved-movies">

                <SearchForm />
                <MoviesCardList />

            </section>
            <Footer />
        </>
    );
}

export default SavedMovies;