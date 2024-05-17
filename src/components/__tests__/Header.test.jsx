import { screen } from '@testing-library/react';

import { renderWithRouter } from '../../utils/testing';

import { Header } from '../Header';

describe('Header', () => {
  it('renders correctly', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText(/React Food/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
