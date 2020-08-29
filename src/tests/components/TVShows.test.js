import React from 'react';
import { render } from '@testing-library/react';
import TVShows from '../../components/TVShows';

describe('<TVShows />', () => {
  it('Renders <TVShows /> component correctly', () => {
    const { getByText } = render(<TVShows />);
    expect(getByText(/All Star Trek TV Shows/i)).toBeInTheDocument();
  });
});
