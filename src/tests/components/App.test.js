import React from 'react';
import { render, screen } from '../customRender';
import App from '../../components/App';

describe('<Header />', () => {
  it('Renders <Header /> component correctly', () => {
    render(<App />);
    expect(screen.getByText(/All you ever wanted to know about Star Trek/i)).toBeInTheDocument();
  });
});
