import { createStore } from 'redux';
import rootReducer from '../reducers/index.js';

const store = createStore(rootReducer, {
  user: {
    name: '',
    email: ''
  },
  token: '',
  news: []
})

export default store;
