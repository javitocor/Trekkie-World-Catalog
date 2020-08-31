import seasonsReducer from '../../reducers/Seasons';
import { GET_SEASONS } from '../../actions/index';

describe('tests for seasons reducer', () => {
  const data = [{
    season: 1,
  }];
  test('returns initial state', () => {
    expect(seasonsReducer([], {})).toEqual([]);
  });
  test('returns the state after handle the action', () => {
    expect(seasonsReducer([], {
      type: GET_SEASONS,
      data,
    })).toEqual(data);
    expect(seasonsReducer(data, {
      type: GET_SEASONS,
      data,
    })).toEqual([...data]);
  });
});
