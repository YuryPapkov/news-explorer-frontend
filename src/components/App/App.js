import React from 'react';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Header from '../Header/header.js';
import Main from '../Main/main.js';
import About from '../About/about.js';
import Footer from '../Footer/footer.js';
import NewsCardList from '../NewsCardList/newsCardList.js';
import PopupWithForm from '../PopupWithForm/popupWithForm.js';

function App() {
  const [currentUser, setCurrentUser] = React.useState({ name: '111', email: '' });
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [isBlackText, setIsBlackText] = React.useState(false);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} isBlackText={isBlackText} />
        <Main />
        <NewsCardList isLoggedIn={isLoggedIn} isTypeSavedCards={false} />
        <About />
        <Footer />
        <PopupWithForm
          title="Вход"
          name="login"
          submitText="Войти"
          redirectText="Зарегистрироваться"
          isOpen={true} >
          <input className="popup__input" type="email" />
          <input className="popup__input" type="text" />
          <input className="popup__input" type="text" />

        </PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
