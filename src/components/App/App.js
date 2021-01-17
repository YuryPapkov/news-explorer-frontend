import React from 'react';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Header from '../Header/header.js';
import Main from '../Main/main.js';
import About from '../About/about.js';
import Footer from '../Footer/footer.js';
import NewsCardList from '../NewsCardList/newsCardList.js';
import Register from '../Register/register.js';
import Login from '../Login/login.js';

function App() {
  const [currentUser, setCurrentUser] = React.useState({ name: '111', email: '' });
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isBlackText, setIsBlackText] = React.useState(false);
  const [showLogin, setShowLogin] = React.useState(true);
  const [showRegister, setShowRegister] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(false);
  const [errorText, setErrorText] = React.useState('Это текст ошибки с сервера');

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
        <Register isOpen={showRegister} onClose={closeAllPopups} onSubmit={handleRegister} errorText={errorText} />
        <Login isOpen={showLogin} onClose={closeAllPopups} onSubmit={handleLogin} errorText={errorText} />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
