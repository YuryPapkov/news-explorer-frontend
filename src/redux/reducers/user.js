import { SET_USER, RESET_USER } from '../../constants/actions-types.js';

const initialState = {
  name: '',
  email: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email
      }
    case RESET_USER:
      return {
        name: '',
        email: ''
      }
    default:
      return state;
  }
}

export default userReducer;
