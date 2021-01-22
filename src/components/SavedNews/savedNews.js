import React from 'react';
import Header from '../Header/header.js';
import SavedNewsHeader from '../SavedNewsHeader/savedNewsHeader.js';
import NewsCardList from '../NewsCardList/newsCardList.js';

function SavedNews({ isLoggedIn, handleLogout }) {

  return (
    <div>
      <Header isLoggedIn={true} isBlackText={true} handleClick={handleLogout} />
      <SavedNewsHeader />
      <NewsCardList isLoggedIn={isLoggedIn} isTypeSavedCards={true} />
    </div>
  );
}
export default SavedNews;
