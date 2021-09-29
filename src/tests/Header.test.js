// import { render, screen } from '@testing-library/react';
import { render, screen } from './test-utils.js';
import Header from '../components/Header';
import * as redux from 'react-redux';

describe('Header component', () => {
  let selectorMock;
  beforeEach(() => {
    selectorMock = jest.spyOn(redux, 'useSelector');
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('does not render login state links without logging in', () => {
    selectorMock.mockReturnValue(false);
    render(<Header />);
    const loginLink = screen.getByRole('link', { name: 'Login' });
    const shopLink = screen.queryByRole('link', { name: 'Shop' });

    expect(loginLink).toBeInTheDocument();
    expect(shopLink).not.toBeInTheDocument();
  });
  it('renders login state links when user logged in', () => {
    selectorMock.mockReturnValue(true);

    render(<Header />);

    const shopLink = screen.getByRole('link', { name: 'Shop' });
    const loginLink = screen.queryByRole('link', { name: 'Login' });

    expect(loginLink).not.toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
  });
});
