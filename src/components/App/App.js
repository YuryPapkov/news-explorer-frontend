import React from 'react';
import './App.css';
import CurrentUserContext from '../../contexts/CurrentUserContext.js';
import Header from '../Header/header.js';
import Main from '../Main/main.js';
import About from '../About/about.js';
import Footer from '../Footer/footer.js';
import NewsCardList from '../NewsCardList/newsCardList.js';

function App() {
  const [currentUser, setCurrentUser] = React.useState({ name: '111', email: '' });
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isBlackText, setIsBlackText] = React.useState(false);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header isLoggedIn={isLoggedIn} isBlackText={isBlackText} />
        <Main />
        <NewsCardList />
        <About />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
