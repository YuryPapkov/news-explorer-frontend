import { SAVE_TOKEN, DELETE_TOKEN, SET_USER, RESET_USER, SET_NEWS } from '../constants/actions-types.js';

export const saveToken = (token) => {
  return {
    type: SAVE_TOKEN,
    payload: token
  }
}

export const deleteToken = () => {
  return {
    type: DELETE_TOKEN,
  }
}

export const setUser = (name, email) => {
  return {
    type: SET_USER,
    payload: {
      name: name,
      email: email
    }
  }
}
export const resetUser = () => {
  return {
    type: RESET_USER,
  }
}

export const setNews = (news) => {
  return {
    type: SET_NEWS,
    payload: news
  }
}