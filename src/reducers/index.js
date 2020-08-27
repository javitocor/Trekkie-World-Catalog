import { combineReducers } from 'redux';
import seasonsReducer from './Seasons';
import episodesReducer from './Episodes';

const rootReducer = combineReducers({
  seasons: seasonsReducer,
  episodes: episodesReducer,
});

export default rootReducer;
