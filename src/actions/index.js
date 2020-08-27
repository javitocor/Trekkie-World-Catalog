import callAPI from '../helpers/API';

export const GET_EPISODES = 'GET EPISODES';
export const GET_SHOWS = 'GET SHOWS';

export const getEpisodes = show => async dispatch => {
  callAPI(show).then(data => {
    dispatch({
      type: 'GET EPISODES',
      data,
    });
  });
};

export const getShows = show => async dispatch => {
  callAPI(show, 0).then(data => {
    dispatch({
      type: 'GET SHOWS',
      data,
    });
  });
};
