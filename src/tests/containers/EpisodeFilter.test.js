import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  render, screen,
} from '../customRender';
import EpisodeFilter from '../../containers/EpisodeFilter';

describe('renders EpisodeFilter component', () => {
  it('Renders <EpisodeFilter /> component properly', () => {
    render(<BrowserRouter><EpisodeFilter /></BrowserRouter>);
    expect(screen.getByText(/Filter by Season/i)).toBeInTheDocument();
  });
});
