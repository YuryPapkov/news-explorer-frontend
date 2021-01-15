import React from 'react';
import { NavLink } from 'react-router-dom';


function Navigation({ isLoggedIn }) {
  return (
    <nav className="navigation" >
      <NavLink exact to="/" activeClassName="navigation__link_active"
        className="navigation__link">Главная
      </NavLink>
      {isLoggedIn &&
        <NavLink exact to="/auth" activeClassName="navigation__link_active"
          className="navigation__link">Сохраненные статьи
      </NavLink>
      }
    </nav >
  );
}
export default Navigation;