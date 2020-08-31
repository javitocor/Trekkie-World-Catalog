import { combineReducers } from 'redux';
import seasonsReducer from './Seasons';
import episodesReducer from './Episodes';
import filterReducer from './Filter';

const rootReducer = combineReducers({
  seasons: seasonsReducer,
  episodes: episodesReducer,
  filter: filterReducer,
});

export default rootReducer;
