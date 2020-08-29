import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '../customRender';
import Episodes from '../../containers/Seasons';
import callAPI from '../../helpers/API';

describe('renders Episodes component', () => {
  it('Renders <Episodes /> TOS component properly', () => {
    const show = 'TOS';
    callAPI(show).then(data => {
      render(<BrowserRouter><Episodes /></BrowserRouter>, data);
      expect(screen.getByText(/The Man Trap/i)).toBeInTheDocument();
    }).catch(() => {

    });
  });
  it('Renders <Episodes /> TNG component properly', async () => {
    const show = 'TNG';
    callAPI(show).then(data => {
      render(<BrowserRouter><Episodes /></BrowserRouter>, data);
      expect(screen.getByText(/Encounter at Farpoint/i)).toBeInTheDocument();
    }).catch(() => {

    });
  });
  it('Renders <Episodes /> VOY component properly', async () => {
    const show = 'VOY';
    callAPI(show).then(data => {
      render(<BrowserRouter><Episodes /></BrowserRouter>, data);
      expect(screen.getByText(/Caretaker/i)).toBeInTheDocument();
    }).catch(() => {

    });
  });
});
