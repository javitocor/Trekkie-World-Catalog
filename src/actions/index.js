import callAPI from '../helpers/API';

export const GET_EPISODES = 'GET EPISODES';
export const GET_SEASONS = 'GET SEASONS';

export const getEpisodes = show => async dispatch => {
  callAPI(show).then(data => {
    dispatch({
      type: GET_EPISODES,
      data,
    });
  });
};

export const getSeasons = show => dispatch => {
  callAPI(show, 0).then(data => {
    dispatch({
      type: GET_SEASONS,
      data,
    });
  });
};
