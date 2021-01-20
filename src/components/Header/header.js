import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Navigation from '../Navigation/navigation.js';
import logoutPath from '../../images/logout.svg';
import logoutWhitePath from '../../images/logout-white.svg';

function Header({ isLoggedIn, isBlackText, handleClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const darkTextColor = isBlackText ? { color: 'black', backgroundColor: 'white' } : {};
  return (
    <header className="header" style={darkTextColor}>
      <p className="header__title">NewsExplorer</p>
      <div className="header__manage-box">
        <Navigation isLoggedIn={isLoggedIn} />
        {isLoggedIn ?
          <button className="header__button" onClick={handleClick}>
            {currentUser.name}
            <span>&nbsp;</span>
            <img src={isBlackText ? logoutPath : logoutWhitePath} alt="выйти" />
          </button>
          :
          <button className="header__button" onClick={handleClick}>Авторизоваться</button>
        }
      </div>
    </header>
  );
}
export default Header;