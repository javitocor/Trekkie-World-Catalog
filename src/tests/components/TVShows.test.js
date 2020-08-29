import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '../customRender';
import TVShows from '../../components/TVShows';

describe('<TVShows />', () => {
  it('Renders <TVShows /> component correctly', () => {
    const { getByText } = render(<BrowserRouter><TVShows /></BrowserRouter>);
    expect(getByText(/All Star Trek TV Shows/i)).toBeInTheDocument();
  });
});
