import { GET_SHOWS } from '../actions/index';

const showsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SHOWS:
      return [...action.data];
    default:
      return state;
  }
};

export default showsReducer;
