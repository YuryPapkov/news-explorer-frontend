import React from 'react';
import flagPath from '../../images/flag.svg';

function NewsCard({ card }) {
  return (
    <div className="card">
      <img className="card__image" src={card.image} alt="uuu" />
      <button className="card__button"><img src={flagPath} alt='mark' /></button>
      <div className="card__content-box">
        <p className=" card__date">{card.date}</p>
        <h3 className="card__title">{card.title}</h3>
        <p className="card__text">{card.text}</p>
      </div>
      <p className="card__source">{card.source}</p>
    </div>
  );
}
export default NewsCard;