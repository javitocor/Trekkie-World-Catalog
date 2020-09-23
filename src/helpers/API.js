/* eslint-disable consistent-return */
/* eslint-disable no-console */
import 'regenerator-runtime/runtime';
import {
  getEpisodes, getSeasons, getEpisodesError, getEpisodesPending, getSeasonsPending, getSeasonsError,
} from '../actions/index';

function getShowId(show) {
  if (show === 'TOS') {
    return '490';
  } if (show === 'TNG') {
    return '491';
  } if (show === 'VOY') {
    return '492';
  } if (show === 'DS9') {
    return '493';
  } if (show === 'ENT') {
    return '714';
  } if (show === 'DIS') {
    return '7480';
  }
  return 0;
}

const urlCall = (show, season = null) => {
  const URL = `https://api.tvmaze.com/shows/${getShowId(show)}/`;
  const EPISODES = 'episodes';
  const SEASONS = 'seasons';
  let Url = '';

  if (season !== null) {
    Url = `${URL + SEASONS}`;
  } else {
    Url = `${URL + EPISODES}`;
  }
  return Url;
};

const callApi = (show, season = null) => async dispatch => {
  const Url = urlCall(show, season);
  try {
    if (season !== null) {
      dispatch(getSeasonsPending());
    } else {
      dispatch(getEpisodesPending());
    }

    const response = await fetch(Url, { mode: 'cors' });
    const data = await response.json();
    if (season !== null) {
      dispatch(getSeasons(data));
    } else {
      dispatch(getEpisodes(data));
    }
    return data;
  } catch (error) {
    if (season !== null) {
      dispatch(getSeasonsError(error));
    } else {
      dispatch(getEpisodesError(error));
    }
  }
};

export default callApi;
