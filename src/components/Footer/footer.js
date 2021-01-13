import React from 'react';
import { Link } from 'react-router-dom';
// import Navigation from '../Navigation/navigation.js';
import githubPath from '../../images/github.svg';
import fbPath from '../../images/fb.svg';

function Footer() {
  return (
    <footer className="footer" >
      <p className="footer__copyright">© 2020 Supersite, Powered by News API</p>
      <div className="footer__link-container">
        <Link to="/" className="footer__link">Главная</Link>
        <a href="https://praktikum.yandex.ru" className="footer__link">Яндекс.Практикум</a>
        <a href="https://github.com" className="footer__icon"><img src={githubPath} alt="логотип Гитхаба" /></a>
        <a href="https://fb.com" className="footer__icon"><img src={fbPath} alt="логотип Фейсбук" /></a>
      </div>
    </footer>
  );
}
export default Footer;