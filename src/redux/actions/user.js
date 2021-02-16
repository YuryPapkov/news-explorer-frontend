import { SET_USER, RESET_USER } from '../../constants/actions-types.js';


export const setUser = ({ name, email }) => {
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

