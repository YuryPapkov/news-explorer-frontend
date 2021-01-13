// import logo from './logo.svg';
import './App.css';
import Header from '../Header/header.js';
import Main from '../Main/main.js';
import About from '../About/about.js';
import Footer from '../Footer/footer.js';
import NewsCardList from '../NewsCardList/newsCardList.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <NewsCardList />
      <About />
      <Footer />
    </div>
  );
}

export default App;
