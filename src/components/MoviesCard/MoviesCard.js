import React, {useState} from 'react';
import './MoviesCard.css';
import thumbnail from '../../images/thumbnail.png';
import liked from '../../images/icon-liked.svg';
import del from '../../images/icon-delete.svg';
import { useLocation } from 'react-router-dom';

function MoviesCard() {
    const title = 'В погоне за Бэнкси';
    const duration = '27 минут';
    const [isLiked, setIsLiked] = useState(false);
    const location = useLocation();

    function likeCard() {
        setIsLiked(!isLiked);
    }

    return (
        <li className={'card'}>
            <div className={'card__description'}>
                <h2 className={'card__title'}>
                    {title}
                </h2>
                <p className={'card__duration'}>
                    {duration}
                </p>
            </div>
            <img
                className={'card__thumbnail'}
                alt={'Превью'}
                src={thumbnail}
            />
            <button
                type="button"
                className={`card__button ${isLiked ? 'card__button_liked' : ''}`}
                onClick={likeCard}
            >
                {location.pathname === '/saved-movies' ? <img className={'card__like-icon'} alt={'Крестик'} src={del}/> :
                    isLiked ? <img className={'card__like-icon'} alt={'Галочка'} src={liked}/> : 'Сохранить'}
            </button>
        </li>
    );
}

export default MoviesCard;