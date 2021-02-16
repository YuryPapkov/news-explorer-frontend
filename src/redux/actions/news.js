import { SET_NEWS } from '../../constants/actions-types.js';

export const setNews = (news) => {
  return {
    type: SET_NEWS,
    payload: news
  }
}