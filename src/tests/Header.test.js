// import { render, screen } from '@testing-library/react';
import { render, screen } from './test-utils.js';
import Header from '../components/Header';

describe('Header', () => {
  test('renders component without a problem', () => {
    render(<Header />);
    const exerciseElement = screen.getByText('Exercise');
    expect(exerciseElement).toBeInTheDocument();
  });

  test('does not render login state links', () => {
    render(<Header />);
    const loginLink = screen.getByRole('link', { name: 'Login' });
    expect(loginLink).toBeInTheDocument();
    const shopLink = screen.queryByRole('link', { name: 'Shop' });
    expect(shopLink).not.toBeInTheDocument();
  });
});
