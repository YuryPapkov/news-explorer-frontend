import { combineReducers } from 'redux';
import userReducer from './user.js';
import newsReducer from './news.js';
import tokenReducer from './token.js';

const rootReducer = combineReducers({
  user: userReducer,
  news: newsReducer,
  token: tokenReducer
});
export default rootReducer;
