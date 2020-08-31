import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '../customRender';
import Seasons from '../../containers/Seasons';
import callAPI from '../../helpers/API';

describe('renders Seasons component', () => {
  it('Renders <Seasons /> component properly', () => {
    const show = 'TOS';
    callAPI(show, 0).then(data => {
      render(<BrowserRouter><Seasons /></BrowserRouter>, data);
      expect(screen.getByText(/1966/i)).toBeInTheDocument();
    }).catch(() => {

    });
  });
  it('Renders <Seasons /> component properly', async () => {
    const show = 'TNG';
    callAPI(show, 0).then(data => {
      render(<BrowserRouter><Seasons /></BrowserRouter>, data);
      expect(screen.getByText(/1994/i)).toBeInTheDocument();
    }).catch(() => {

    });
  });
  it('Renders <Seasons /> component properly', async () => {
    const show = 'VOY';
    callAPI(show, 0).then(data => {
      render(<BrowserRouter><Seasons /></BrowserRouter>, data);
      expect(screen.getByText(/1999/i)).toBeInTheDocument();
    }).catch(() => {

    });
  });
});
