import React from 'react';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Header from '../Header/header.js';
import Main from '../Main/main.js';
import About from '../About/about.js';
import Footer from '../Footer/footer.js';
import NewsCardList from '../NewsCardList/newsCardList.js';
import SavedNews from '../SavedNews/savedNews.js';
import Register from '../Register/register.js';
import Login from '../Login/login.js';
import PopupInfo from '../PopupInfo/popupInfo.js';
import SavedNewsHeader from '../SavedNewsHeader/savedNewsHeader.js';
import NotFoundBox from '../NotFoundBox/notFoundBox.js';
import Preloader from '../Preloader/preloader.js';

function App() {
  const [currentUser, setCurrentUser] = React.useState({ name: 'Грета', email: 'greta@yandex.ru' });
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isBlackText, setIsBlackText] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(true);
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
    // логика входа пользователя
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} isBlackText={isBlackText} />
        <Main />
        <NewsCardList isLoggedIn={isLoggedIn} isTypeSavedCards={false} />
        <About />
        <Footer />
        <NotFoundBox />
        <Preloader />
        <SavedNewsHeader />
        <SavedNews />
        <Register isOpen={showRegister} onClose={closeAllPopups} onSubmit={handleRegister} errorText={errorText} />
        <Login isOpen={showLogin} onClose={closeAllPopups} onSubmit={handleLogin} errorText={errorText} />
        <PopupInfo isOpen={showInfo} onClose={closeAllPopups} title='Пользователь успешно зарегистрирован.' redirectText='Войти' />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
