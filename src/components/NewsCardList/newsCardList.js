import React from 'react';
import NewsCard from '../NewsCard/newsCard.js';
import tempArticles from '../../constants/tempArticles.js';

function NewsCardList({ isLoggedIn, isTypeSavedCards }) {
  const [numberOfCards, setNumberOfCards] = React.useState(3);

  const increaseNumberOfCards = () => {
    setNumberOfCards(Math.min(numberOfCards + 3, tempArticles.length));
  }
  const arrayToShow = tempArticles.slice(0, numberOfCards);

  const classNameListButton =
    `list__button ${arrayToShow.length === tempArticles.length && 'list__button_invisible'}`;

  return (
    <div className="list content">
      {!isTypeSavedCards && <h2 className="list__title">Результаты поиска</h2>}
      <ul className="list__cards">
        {arrayToShow.map((item) =>
          <NewsCard
            key={item._id}
            card={item}
            isLoggedin={isLoggedIn}
            isTypeSavedCards={isTypeSavedCards}
          />
        )}

      </ul>
      <button className={classNameListButton} onClick={increaseNumberOfCards}>Показать еще</button>

    </div>


    // <footer className="footer" >
    //   <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
    //   <div className="footer__link-container">
    //     <Link to="/" className="footer__link">Главная</Link>
    //     <a href="https://praktikum.yandex.ru" className="footer__link">Яндекс.Практикум</a>
    //     <a href="https://github.com" className="footer__icon"><img src={githubPath} alt="логотип Гитхаба" /></a>
    //     <a href="https://fb.com" className="footer__icon"><img src={fbPath} alt="логотип Фейсбук" /></a>
    //   </div>
    // </footer>
  );
}
export default NewsCardList;