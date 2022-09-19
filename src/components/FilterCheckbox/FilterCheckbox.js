import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
    return (
        <div className="checkbox">
            <input type="checkbox" className={"checkbox__input"} id={'short-movie'} />
            <label htmlFor={'short-movie'} className="checkbox__label">Короткометражки</label>
        </div>
    );
}

export default FilterCheckbox;