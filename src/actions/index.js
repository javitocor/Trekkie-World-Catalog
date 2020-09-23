export const GET_EPISODES = 'GET EPISODES';
export const GET_SEASONS = 'GET SEASONS';
export const CHANGE_FILTER = 'CHANGE FILTER';
export const GET_EPISODES_ERROR = 'GET_EPISODES_ERROR';
export const GET_EPISODES_PENDING = 'GET_EPISODES_PENDING';
export const GET_SEASONS_PENDING = 'GET_SEASONS_PENDING';
export const GET_SEASONS_ERROR = 'GET_SEASONS_ERROR';

export const getEpisodes = data => ({
  type: GET_EPISODES,
  data,
});

export const getEpisodesError = error => ({
  type: GET_EPISODES_ERROR,
  error,
});

export const getEpisodesPending = () => ({
  type: GET_EPISODES_PENDING,
});

export const getSeasons = data => ({
  type: GET_SEASONS,
  data,
});

export const getSeasonsError = error => ({
  type: GET_SEASONS_ERROR,
  error,
});

export const getSeasonsPending = () => ({
  type: GET_SEASONS_PENDING,
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter,
});
