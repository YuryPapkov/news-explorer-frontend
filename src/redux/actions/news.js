import { SET_NEWS } from '../../constants/actions-types.js';
import { createAction } from 'redux-actions';
export const setNews = createAction(SET_NEWS);

// export const setNews = (news) => {
//   return {
//     type: SET_NEWS,
//     payload: news
//   }
// }