import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Header from '../Header/header.js';
import Main from '../Main/main.js';
import About from '../About/about.js';
import Footer from '../Footer/footer.js';
import NewsCardList from '../NewsCardList/newsCardList.js';
// import SavedNews from '../SavedNews/savedNews.js';
import Register from '../Register/register.js';
import Login from '../Login/login.js';
import PopupInfo from '../PopupInfo/popupInfo.js';
import SavedNewsHeader from '../SavedNewsHeader/savedNewsHeader.js';
import NotFoundBox from '../NotFoundBox/notFoundBox.js';
import Preloader from '../Preloader/preloader.js';

function App() {
  const [currentUser, setCurrentUser] = React.useState({ name: 'Грета', email: 'greta@yandex.ru' });
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  // const [isBlackText, setIsBlackText] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(false);
  const [showPreloader, setShowPreloader] = React.useState(false);
  const [isSomethingFound, setIsSomethingFound] = React.useState(true);
  const [hasUserPressedSearchOnce, setHasUserPressedSearchOnce] = React.useState(false);
  const [errorText, setErrorText] = React.useState('Это текст ошибки с сервера');

  document.addEventListener('keyup', (evt) => {
    console.log(evt.code);
    if (evt.code === 'Escape') {
      closeAllPopups();
    }
  })




  function closeAllPopups() {
    setShowLogin(false);
    setShowRegister(false);
    setShowInfo(false);
  }
  function handleRegister() {
    // логика регистрации пользователя
  }

  function handleLogin() {
    // логика авторизации

    console.log('ki-Login');
    setIsLoggedIn(true);
  }

  function handleLogout() {
    // логика выхода 
    console.log('ki-Logout');
    setIsLoggedIn(false);
    history.push('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Route exact path="/">
          <Header isLoggedIn={isLoggedIn} isBlackText={false} handleClick={isLoggedIn ? handleLogout : handleLogin} />
          <Main />
          {hasUserPressedSearchOnce &&
            (isSomethingFound ?
              <NewsCardList isLoggedIn={isLoggedIn} isTypeSavedCards={false} /> :
              <NotFoundBox />
            )
          }

          <About />
        </Route>
        <Route path="/saved-news">
          <Header isLoggedIn={true} isBlackText={true} handleClick={handleLogout} />
          <SavedNewsHeader />
          <NewsCardList isLoggedIn={isLoggedIn} isTypeSavedCards={true} />
        </Route>
        <Footer />
        {showPreloader && <Preloader />}
        <Register isOpen={showRegister} onClose={closeAllPopups} onSubmit={handleRegister} errorText={errorText} />
        <Login isOpen={showLogin} onClose={closeAllPopups} onSubmit={handleLogin} errorText={errorText} />
        <PopupInfo isOpen={showInfo} onClose={closeAllPopups} title='Пользователь успешно зарегистрирован.' redirectText='Войти' />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
