import React from 'react';
import { render } from '@testing-library/react';
import ShowsContainer from '../../components/ShowsContainer';

describe('<ShowsContainer />', () => {
  it('Renders <ShowsContainer /> component correctly', () => {
    const { getByText } = render(<ShowsContainer />);
    expect(getByText(/Premiered/i)).toBeInTheDocument();
  });
});
