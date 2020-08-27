import { GET_SEASONS } from '../actions/index';

const seasonsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_SEASONS:
      return [...action.data];
    default:
      return state;
  }
};

export default seasonsReducer;
