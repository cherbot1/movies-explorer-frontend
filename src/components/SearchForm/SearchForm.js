import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import searchIcon from '../../images/search-icon.svg';

function SearchForm() {
    return (
        <form
            className={"search-form"}
            name="movies-search-form"
        >
            <div className={"search-form__search-wrapper"}>
                <input
                    className="search-form__input"
                    placeholder="Фильм"
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

            <FilterCheckbox />
        </form>
    );
}

export default SearchForm;