import episodesReducer from '../../reducers/Episodes';
import { GET_EPISODES } from '../../actions/index';

describe('tests episodes reducer', () => {
  test('returns the initial state', () => {
    expect(episodesReducer([], {})).toEqual([]);
  });
  test('returns the state after handle the action', () => {
    const data = [{
      name: 'star trek',
    }];
    expect(episodesReducer([], {
      type: GET_EPISODES,
      data,
    })).toEqual(data);
    expect(episodesReducer(data, {
      type: GET_EPISODES,
      data,
    })).toEqual([...data]);
  });
});
