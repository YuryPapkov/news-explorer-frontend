import React from 'react';
import { Route, useHistory } from 'react-router-dom';

import './App.css';
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
import { register, login, checkToken, getArticles, addArticle, deleteArticle } from '../../utils/mainApi.js';
import { useSelector, useDispatch } from 'react-redux';
import { setUser, resetUser, saveToken, deleteToken, setNews } from '../../redux/actions/index.js';

function App() {
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
  const [savedNews, setSavedNews] = React.useState([]);
  const curToken = useSelector(state => state.token);
  const curNews = useSelector(state => state.news);
  const curUser = useSelector(state => state.user);
  const dispatch = useDispatch();

  document.addEventListener('keyup', (evt) => {
    if (evt.code === 'Escape') {
      closeAllPopups();
    }
  })
  console.log(curNews, curToken, curUser);
  React.useEffect(() => {
    const token = curToken;
    if (token) {
      checkToken(token)
        .then((res) => {
          dispatch(setUser({ name: res.data.name, email: res.data.email }));
          setIsLoggedIn(true);
          getArticles(token)
            .then((res) => {
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
    if (curNews.length > 0) {
      setIsSomethingFound(true);
    }
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    })
  }, [curNews.length]);

  // function refreshNewsInLocalStorage() {
  //   localStorage.setItem('news', JSON.stringify(news));
  // }

  function handleSubmitSearch(evt, keyWord) {
    evt.preventDefault();
    setShowPreloader(true);
    search(keyWord)
      .then((res) => {
        const articlesNewArray = res.articles.map(item => convertNewsObj(item, keyWord));
        dispatch(setNews(articlesNewArray)); //redux store
        setShowPreloader(false);
        if (res.articles.length === 0) {
          setIsSomethingFound(false);
        }
        setHasUserPressedSearchOnce(true);
      })
      .catch((err) => {
        console.log(err);
        setShowPreloader(false);
      })
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

  // логика регистрации пользователя
  function handleRegister(data) {
    console.log(data);
    register(data)
      .then((res) => {
        closeAllPopups();
        setShowInfo(true);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err.message}`);
        setErrorText(`Ошибка: ${err.message}`);

      })
    // .catch((err) => {
    //   err.json()
    //     .then((err) => {
    //     })
    //     .catch((err) => {
    //       console.log('Error object could not be parsed...');
    //     })
    // })
  }

  // логика авторизации
  function handleLogin(data) {
    login(data)
      .then((res) => {
        console.log(res);
        dispatch(saveToken(res.token)); //redux store
        getArticles(res.token)
          .then((res) => {
            setSavedNews(res.data);
          })
          .catch((err) => {
            console.log(err);
          })
        return (res.token);
      })
      .then((res) => {
        console.log(res);
        checkToken(res)
          .then((res) => {
            dispatch(setUser({ name: res.data.name, email: res.data.email })); //redux store
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

  // логика выхода 
  function handleLogout() {
    dispatch(deleteToken()); //redux store
    dispatch(resetUser()); //redux store
    setIsLoggedIn(false);
    history.push('/');
  }

  // добавление карточки
  function handleAddCard(card) {
    const token = curToken;
    const cardToAdd = Object.assign({}, card);

    delete cardToAdd._id;
    delete cardToAdd.isMarked;

    addArticle(token, cardToAdd)
      .then((res) => {
        card.isMarked = true;
        // refreshNewsInLocalStorage();
        getArticles(token)
          .then((res) => {
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

  // удаление карточки
  function handleDeleteCard(card) {
    const token = curToken;
    deleteArticle(token, card)
      .then((res) => {
        getArticles(token)
          .then((res) => {
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

  return (
    <div className="App">
      <Route exact path="/">
        <Header
          screenWidth={screenWidth}
          isLoggedIn={isLoggedIn}
          isBlackText={false}
          handleClick={isLoggedIn ? handleLogout : openLoginPopup} />
        <Main onSubmit={handleSubmitSearch} />
        {(hasUserPressedSearchOnce || curNews.length > 0) &&
          (isSomethingFound ?
            <NewsCardList isLoggedIn={isLoggedIn} isTypeSavedCards={false} cards={curNews} onButtonPress={handleAddCard} /> :
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
        onButtonPress={handleDeleteCard}
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
  );
}

// const mapStateToProps = state => ({
//   curUser: state.user,
//   curToken: state.token,
//   curNews: state.news
// })

// const mapDispatchToProps = dispatch => ({
//   setUser: userData => dispatch(setUser(userData)),
//   resetUser: () => dispatch(resetUser()),
//   saveToken: token => dispatch(saveToken(token)),
//   deleteToken: () => dispatch(deleteToken()),
//   setNews: (news) => dispatch(setNews(news))
// })

export default App;
