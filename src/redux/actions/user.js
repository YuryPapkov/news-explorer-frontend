import { SET_USER, RESET_USER } from '../../constants/actions-types.js';
import { createAction } from 'redux-actions';
export const setUser = createAction(SET_USER);
export const resetUser = createAction(RESET_USER);


// export const setUser = ({ name, email }) => {
//   return {
//     type: SET_USER,
//     payload: {
//       name: name,
//       email: email
//     }
//   }
// }
// export const resetUser = () => {
//   return {
//     type: RESET_USER,
//   }
// }

