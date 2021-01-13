import React from 'react';

function NewsCard() {
  return (
    <div className="card">
      <img src="" alt="" />
      <button></button>
      <p className=" card__date">11/03/2020</p>
      <h3 className="card__title">TITLE</h3>
      <p className="card__text">kjsdhfkajsdfh asdfh aksjdfhk sdkjfh skjdf asdkfh askdjfhkjsa</p>
      <p className="card__source">JKJLKJ</p>
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
export default NewsCard;