import { SAVE_TOKEN, DELETE_TOKEN } from '../../constants/actions-types.js';

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