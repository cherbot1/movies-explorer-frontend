import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import searchIcon from '../../images/search-icon.svg';

function SearchForm({ searchNameMovie, setSearchNameMovie, shortMovie, setShortMovie, showMovies }) {

    function onSubmit(event) {
        event.preventDefault();
        showMovies();
    }

    function handleSearchRequest(event) {
        setSearchNameMovie(event.target.value);
    }

    return (
        <form
            className={"search-form"}
            name="movies-search-form"
            onSubmit={onSubmit}
        >
            <div className={"search-form__search-wrapper"}>
                <input
                    className="search-form__input"
                    placeholder="Фильм"
                    onChange={handleSearchRequest}
                    value={searchNameMovie}
                    required
                />
                <button
                    type="submit"
                    className={'search-form__search-button'}
                >
                    <img
                        className={'search-form__search-icon'}
                        alt={'Искать'}
                        src={searchIcon}
                    />
                </button>
            </div>

            <FilterCheckbox
                checkBox={shortMovie}
                handleShortMovie={setShortMovie}
            />
        </form>
    );
}

export default SearchForm;