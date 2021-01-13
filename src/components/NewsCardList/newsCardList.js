import React from 'react';
import NewsCard from '../NewsCard/newsCard.js';

function Footer() {
  return (
    <div className="list">
      <h2 className="list__title">Результаты поиска</h2>
      <ul className="list__cards">
        <li>
          <NewsCard />
        </li>
        <li>
          <NewsCard />
        </li>
        <li>
          <NewsCard />
        </li>
      </ul>
      <button>Показать еще</button>

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
export default Footer;