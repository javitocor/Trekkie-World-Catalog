import filterReducer from '../../reducers/Filter';
import { CHANGE_FILTER } from '../../actions/index';

describe('tests filter reducer', () => {
  const filter = '2';
  test('returns initial state', () => {
    expect(filterReducer(undefined, {})).toEqual('All');
  });
  test('returns the state after handle the action', () => {
    expect(filterReducer(undefined, {
      type: CHANGE_FILTER,
      filter,
    })).toMatch('2');
    expect(filterReducer(filter, {
      type: CHANGE_FILTER,
      filter,
    })).toMatch('2');
  });
});
