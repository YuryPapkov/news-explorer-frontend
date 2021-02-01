import React from 'react';
import classNames from 'classnames';
import flagPath from '../../images/flag.svg';
import flagMarkedPath from '../../images/flag-marked.svg';
import trashBinPath from '../../images/trash.svg';
import cutString from '../../utils/cutString.js'
import cutStringFine from '../../utils/cutStringFine.js';

const NewsCard = React.memo(({ card, isLoggedIn, isTypeSavedCards, onButtonPress }) => {
  console.log('render c');
  const [isMarked, setIsMarked] = React.useState(false);
  const textFieldRef = React.useRef();
  const [textLength, setTextLength] = React.useState(300)
  const buttonClasses = classNames(
    'card__button',
    { 'card__button_type_saved-cards': isTypeSavedCards },
    { 'card__button_type_main': !isTypeSavedCards }
  );
  React.useEffect(() => {
    setTextLength(Math.min(300, textFieldRef.current.innerHTML.length));
    textFieldRef.current.innerHTML = textFieldRef.current.innerHTML.slice(0, textLength);
  }, []);
  React.useEffect(() => {
    const scroll = textFieldRef.current.scrollHeight;
    const textHeight = textFieldRef.current.clientHeight;
    textFieldRef.current.innerHTML = cutString(scroll, textHeight, textFieldRef.current.innerHTML);
    if (scroll > textHeight && textHeight > 22) {
      setTextLength(textLength - 7);
      textFieldRef.current.innerHTML = cutStringFine(textFieldRef.current.innerHTML);
    }
  }, [textLength])

  const handleButtonClick = (() => {
    onButtonPress(card);
    if (!isTypeSavedCards) {
      setIsMarked(true);
    }
  })

  return (
    <li className="card">
      <img className="card__image" src={card.image} alt={card.keyword} />
      <button
        className={buttonClasses}
        onClick={handleButtonClick} >
        <img src={isTypeSavedCards ? trashBinPath : (isMarked ? flagMarkedPath : flagPath)} alt='mark' />
      </button>
      { isTypeSavedCards && <p className="card__keyword">{card.keyword}</p>}
      <div className="card__content-box">
        <p className=" card__date">{card.date}</p>
        <h3 className="card__title">{card.title}</h3>
        <p className="card__text" ref={textFieldRef}>{card.text}</p>
      </div>
      <p className="card__source">{card.source}</p>
    </li >
  );
})
export default NewsCard;