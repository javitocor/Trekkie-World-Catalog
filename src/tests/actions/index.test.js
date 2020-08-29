import { CHANGE_FILTER, changeFilter } from '../../actions/index';

describe('test actions', () => {
  test('should create an action to filter seasons', () => {
    const filter = '1';
    const action = {
      type: CHANGE_FILTER,
      filter,
    };
    expect(changeFilter(filter)).toEqual(action);
  });
});
