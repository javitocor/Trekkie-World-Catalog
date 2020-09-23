import { GET_EPISODES, GET_EPISODES_ERROR, GET_EPISODES_PENDING } from '../actions/index';

const initialState = {
  pending: true,
  error: null,
  data: [],
};

const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EPISODES:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case GET_EPISODES_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_EPISODES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default episodesReducer;
