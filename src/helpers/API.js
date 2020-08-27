import 'regenerator-runtime/runtime';

const callApi = async (show, season = null) => {
  const URL = `https://api.tvmaze.com/shows/${show}/`;
  const EPISODES = 'episodes';
  const SEASONS = 'seasons';
  let Url = '';

  if (season !== null) {
    Url = `${URL + SEASONS}`;
  } else {
    Url = `${URL + EPISODES}`;
  }

  const response = await fetch(Url, { mode: 'cors' });
  const data = await response.json();
  return data;
};

export default callApi;
