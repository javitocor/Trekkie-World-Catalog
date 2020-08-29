import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '../customRender';
import ShowsContainer from '../../components/ShowsContainer';

describe('<ShowsContainer />', () => {
  it('Renders <ShowsContainer /> component correctly', () => {
    render(<BrowserRouter><ShowsContainer /></BrowserRouter>);
    expect(screen.getByText(/Premiered/i)).toBeInTheDocument();
  });
});
