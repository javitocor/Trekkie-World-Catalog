import { GET_EPISODES } from '../actions/index';

const episodesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EPISODES:
      return [...action.data];
    default:
      return state;
  }
};

export default episodesReducer;
