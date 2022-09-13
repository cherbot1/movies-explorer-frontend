import React, {useState} from 'react';
import './MoviesCard.css';
import thumbnail from '../../images/thumbnail.png';
import liked from '../../images/icon-liked.svg'

function MoviesCard() {
    const title = 'В погоне за Бэнкси';
    const duration = '27 минут';
    const [isLiked, setIsLiked] = useState(false);

    function likeCard() {
        setIsLiked(true);
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
                {isLiked ? <img className={'card__like-icon'} alt={'Галочка'} src={liked}/> : 'Сохранить'}
            </button>
        </li>
    );
}

export default MoviesCard;