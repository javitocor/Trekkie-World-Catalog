import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {
  render, screen,
} from '../customRender';
import EpisodeFilter from '../../containers/EpisodeFilter';

Enzyme.configure({ adapter: new Adapter() });

describe('renders EpisodeFilter component', () => {
  it('Renders <EpisodeFilter /> component properly', () => {
    render(<BrowserRouter><EpisodeFilter /></BrowserRouter>);
    expect(screen.getByText(/Filter by Season/i)).toBeInTheDocument();
  });
});

it('should select correct time', () => {
  const wrapper = shallow(<BrowserRouter><EpisodeFilter value="All" onChange={jest.fn()} /></BrowserRouter>);

  expect(wrapper.find('select').props().value).toBe('All');
});
