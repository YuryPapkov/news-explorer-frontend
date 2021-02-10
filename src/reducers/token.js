import { SAVE_TOKEN, DELETE_TOKEN } from '../constants/actions-types.js';

const initialState = '';

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_TOKEN: {
      return action.payload
    }
    case DELETE_TOKEN: {
      return []
    }

    default:
      return initialState;
  }
}

export default tokenReducer;
