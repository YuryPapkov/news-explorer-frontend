import React from 'react';
import classNames from 'classnames';
import flagPath from '../../images/flag.svg';
import flagMarkedPath from '../../images/flag-marked.svg';
import trashBinPath from '../../images/trash.svg';

function NewsCard({ card, isLoggedIn, isTypeSavedCards }) {
  const [isMarked, setIsMarked] = React.useState(false);
  const buttonClasses = classNames(
    'card__button',
    { 'card__button_type_saved-cards': isTypeSavedCards },
    { 'card__button_type_main': !isTypeSavedCards }
  );

  const handleCardClick = (() => {
    // обращение к нашему АПИ и по результату ставим синий флажок
    // console.log(card._id);
    setIsMarked(!isMarked);
  })

  return (
    <div className="card">
      <img className="card__image" src={card.image} alt={card.keyword} />
      <button
        className={buttonClasses}
        onClick={handleCardClick} >
        <img src={isTypeSavedCards ? trashBinPath : (isMarked ? flagMarkedPath : flagPath)} alt='mark' />
      </button>
      { isTypeSavedCards && <p className="card__keyword">{card.keyword}</p>}
      <div className="card__content-box">
        <p className=" card__date">{card.date}</p>
        <h3 className="card__title">{card.title}</h3>
        <p className="card__text">{card.text}</p>
      </div>
      <p className="card__source">{card.source}</p>
    </div >
  );
}
export default NewsCard;