import { combineReducers } from 'redux';
import showsReducer from './Shows';
import episodesReducer from './Shows';

const rootReducer = combineReducers({
  shows: showsReducer,
  episodes: episodesReducer,
});

export default rootReducer;
