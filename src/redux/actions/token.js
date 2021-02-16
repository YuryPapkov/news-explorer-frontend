import { SAVE_TOKEN, DELETE_TOKEN } from '../../constants/actions-types.js';

import { createAction } from 'redux-actions';
export const saveToken = createAction(SAVE_TOKEN);
export const deleteToken = createAction(DELETE_TOKEN);

// export const saveToken = (token) => {
//   return {
//     type: SAVE_TOKEN,
//     payload: token
//   }
// }

// export const deleteToken = () => {
//   return {
//     type: DELETE_TOKEN,
//   }
// }