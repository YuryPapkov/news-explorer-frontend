import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Navigation from '../Navigation/navigation.js';
import logoutPath from '../../images/logout.svg';

function Header({ isLoggedIn, isBlackText }) {
  const currentUser = React.useContext(CurrentUserContext);
  const darkTextColor = isBlackText ? { color: 'black' } : {};
  return (
    <header className="header" style={darkTextColor}>
      <p className="header__title">NewsExplorer</p>
      <div className="header__manage-box">
        <Navigation isLoggedIn={isLoggedIn} />
        {isLoggedIn ?
          <button className="header__button">
            {currentUser.name}
            <span>&nbsp;</span>
            <img src={logoutPath} alt="выйти" />
          </button>
          :
          <button className="header__button">Авторизоваться</button>
        }
      </div>
    </header>
  );
}
export default Header;