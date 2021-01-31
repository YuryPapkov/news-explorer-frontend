import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Header from '../Header/header.js';
import Main from '../Main/main.js';
import About from '../About/about.js';
import Footer from '../Footer/footer.js';
import NewsCardList from '../NewsCardList/newsCardList.js';
import Register from '../Register/register.js';
import Login from '../Login/login.js';
import PopupInfo from '../PopupInfo/popupInfo.js';
import SavedNews from '../SavedNews/savedNews.js';
import NotFoundBox from '../NotFoundBox/notFoundBox.js';
import Preloader from '../Preloader/preloader.js';
import ProtectedRoute from '../ProtectedRoute/protectedRoute.js';

import search from '../../utils/newsApi.js';
import convertNewsObj from '../../utils/convertNewsObj';
import { register, login, checkToken, getArticles, addArticle } from '../../utils/mainApi.js';



function App() {
  const [currentUser, setCurrentUser] = React.useState({ name: 'Грета', email: 'greta@yandex.ru' });
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [screenWidth, setScreenWidth] = React.useState(1440);
  const [showLogin, setShowLogin] = React.useState(false);
  const [showRegister, setShowRegister] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(false);
  const [showPreloader, setShowPreloader] = React.useState(false);
  const [isSomethingFound, setIsSomethingFound] = React.useState(false);
  const [hasUserPressedSearchOnce, setHasUserPressedSearchOnce] = React.useState(false);
  const [errorText, setErrorText] = React.useState('');
  const [news, setNews] = React.useState([]);
  const [savedNews, setSavedNews] = React.useState([]);
  document.addEventListener('keyup', (evt) => {
    if (evt.code === 'Escape') {
      closeAllPopups();
    }
  })
  React.useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      checkToken(token)
        .then((res) => {
          setCurrentUser({ name: res.data.name, email: res.data.email });
          setIsLoggedIn(true);
          getArticles(token)
            .then((res) => {
              console.log(res);
              setSavedNews(res.data);
            })
            .catch((err) => {
              console.log(err);
            })

        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [])
  React.useEffect(() => {
    setScreenWidth(window.innerWidth);
    setNews(JSON.parse(localStorage.getItem('news')) || []);
    if (news.length > 0) {
      setIsSomethingFound(true);
    }
    console.log(JSON.parse(localStorage.getItem('news')));
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    })
  }, [news.length]);


  function handleSubmitSearch(evt, keyWord) {
    evt.preventDefault();
    console.log(evt, keyWord);
    setShowPreloader(true);
    search(keyWord)
      .then((res) => {
        // console.log(res.articles);
        const articlesNewArray = res.articles.map(item => convertNewsObj(item, keyWord));
        // console.log(articlesNewArray);
        localStorage.setItem('news', JSON.stringify(articlesNewArray));
        setNews(articlesNewArray);
        setShowPreloader(false);
        if (res.articles.length === 0) {
          setIsSomethingFound(false);
        }
        setHasUserPressedSearchOnce(true);
      })
      .catch((err) => {
        console.log(err);
      })
    // setTimeout(() => {
    //   setIsSomethingFound(Math.random() > .5);
    //   setHasUserPressedSearchOnce(true);
    //   setShowPreloader(false);
    // }, 1000)

  }

  function openRegisterPopup() {
    setShowRegister(true);
  }

  function openLoginPopup() {
    setShowLogin(true);
  }
  function closeAllPopups() {
    setShowLogin(false);
    setShowRegister(false);
    setShowInfo(false);
    setErrorText('');
  }

  function redirectToLogin() {
    closeAllPopups();
    openLoginPopup();
  }

  function redirectToRegister() {
    closeAllPopups();
    openRegisterPopup();
  }

  function handleRegister(data) {
    // логика регистрации пользователя
    console.log(data);
    register(data)
      .then((res) => {
        // console.log(res);
        closeAllPopups();
        setShowInfo(true);
      })
      .catch((err) => {
        err.json()
          .then((err) => {
            console.log(`Ошибка: ${err.message}`);
            setErrorText(`Ошибка: ${err.message}`);
          })
          .catch((err) => {
            console.log('Error object could not be parsed...');
          })
      })

  }

  function handleLogin(data) {
    // логика авторизации
    login(data)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        getArticles(res.token)
          .then((res) => {
            console.log(res);
            setSavedNews(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
        return (res.token);
      })
      .then((res) => {
        checkToken(res)
          .then((res) => {
            console.log(res.data.name);
            setCurrentUser({ name: res.data.name, email: res.data.email });
            setIsLoggedIn(true);
            closeAllPopups();
          })
          .catch((err) => {
            console.log(err);
            setErrorText(err.message);
          })
      })
      .catch((err) => {
        console.log(err);
        if (err.status) {
          err.json()
            .then((err) => {
              console.log(`Ошибка: ${err.message}`);
              setErrorText(`Ошибка: ${err.message}`);
            })
            .catch((err) => {
              console.log('Error object could not be parsed...');
            })
        } else {
          setErrorText('Что то пошло не так...');
        }

      })

  }

  function handleLogout() {
    // логика выхода 
    localStorage.setItem('jwt', '');
    setCurrentUser({ name: '', email: '' });
    console.log('ki-Logout');
    setIsLoggedIn(false);
    history.push('/');
  }

  function handleAddCard(card) {
    // добавление карточки
    const token = localStorage.getItem('jwt');
    addArticle(token, card)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })

  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Route exact path="/">
          <Header
            screenWidth={screenWidth}
            isLoggedIn={isLoggedIn}
            isBlackText={false}
            handleClick={isLoggedIn ? handleLogout : openLoginPopup} />
          <Main onSubmit={handleSubmitSearch} />
          {(hasUserPressedSearchOnce || news.length > 0) &&
            (isSomethingFound ?
              <NewsCardList isLoggedIn={isLoggedIn} isTypeSavedCards={false} cards={news} onAddArticle={handleAddCard} /> :
              <NotFoundBox />
            )
          }

          <About />
        </Route>
        <ProtectedRoute path="/saved-news"
          screenWidth={screenWidth}
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
          cards={savedNews}
          component={SavedNews}
        />
        <Footer screenWidth={screenWidth} />
        {showPreloader && <Preloader />}
        <Register
          isOpen={showRegister}
          onClose={closeAllPopups}
          onSubmit={handleRegister}
          onRedirect={redirectToLogin}
          errorText={errorText} />
        <Login
          isOpen={showLogin}
          onClose={closeAllPopups}
          onSubmit={handleLogin}
          onRedirect={redirectToRegister}
          errorText={errorText} />
        <PopupInfo
          isOpen={showInfo}
          onClose={closeAllPopups}
          title='Пользователь успешно зарегистрирован.'
          redirectText='Войти'
          onRedirect={redirectToLogin} />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
