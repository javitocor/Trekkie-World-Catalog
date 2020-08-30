import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import EpisodeFilter from '../../containers/EpisodeFilter';
import { changeFilter } from '../../actions/index';

const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      seasons: [{
        name: 'TOS',
      }],
    });

    store.dispatch = jest.fn();

    component = renderer.create(
      <Provider store={store}>
        <EpisodeFilter />
      </Provider>,
    );
  });
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should dispatch an action on button click', () => {
    renderer.act(() => {
      component.root.findByType('select').props.onChange({ target: { value: '1' } });
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      changeFilter({ filter: '1' }),
    );
  });
});
