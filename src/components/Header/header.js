import React from 'react';
import Navigation from '../Navigation/navigation.js';
// import logoPath from '../images/logo.svg';

function Header() {
  return (
    <header className="header" >
      <p className="header__title">NewsExplorer</p>
      <div className="header__manage-box">
        <Navigation />
        <button className="header__button">Авторизоваться</button>
      </div>
    </header>
  );
}
export default Header;