/* eslint-disable consistent-return */
/* eslint-disable no-console */
import 'regenerator-runtime/runtime';

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

const callApi = async (show, season = null) => {
  const URL = `https://api.tvmaze.com/shows/${getShowId(show)}/`;
  const EPISODES = 'episodes';
  const SEASONS = 'seasons';
  let Url = '';

  if (season !== null) {
    Url = `${URL + SEASONS}`;
  } else {
    Url = `${URL + EPISODES}`;
  }

  try {
    const response = await fetch(Url, { mode: 'cors' });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default callApi;
