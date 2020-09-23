import { GET_SEASONS, GET_SEASONS_PENDING, GET_SEASONS_ERROR } from '../actions/index';

const seasonsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SEASONS:
      return {
        ...state,
        pending: false,
        data: action.data,
      };
    case GET_SEASONS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case GET_SEASONS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default seasonsReducer;
