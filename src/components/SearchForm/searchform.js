import React from 'react';

function SearchForm() {
  return (
    <form className="search">
      <input name="search" type="text" className="search__input" autoComplete="off"></input>
      <button type="submit" className="search__button">Искать</button>
    </form>
  );
}
export default SearchForm;