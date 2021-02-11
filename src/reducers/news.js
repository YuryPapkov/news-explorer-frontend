import { SET_NEWS } from '../constants/actions-types.js';

const initialState = []

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEWS: {
      return action.payload
    }

    default:
      return state;
  }
}

export default newsReducer;
