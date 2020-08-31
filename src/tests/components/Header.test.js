import React from 'react';
import { render } from '@testing-library/react';
import Header from '../../components/Header';

describe('<Header />', () => {
  it('Renders <Header /> component correctly', () => {
    const { getByText } = render(<Header />);
    expect(getByText(/All you ever wanted to know about Star Trek/i)).toBeInTheDocument();
  });
});
