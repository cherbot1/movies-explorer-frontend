import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import searchIcon from '../../images/search-icon.svg';

function SearchForm({ searchRequest, setSearchRequest, checkBox, handleShortMovie, submitSearchForm }) {

    function onSubmit(event) {
        event.preventDefault();
        submitSearchForm();
    }

    function handleSearchRequest(event) {
        setSearchRequest(event.target.value);
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
                    value={searchRequest}
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
                checkBox={checkBox}
                setShortMovie={handleShortMovie}
            />
        </form>
    );
}

export default SearchForm;