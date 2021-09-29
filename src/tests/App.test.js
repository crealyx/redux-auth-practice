import React from 'react';
import App from '../App';
import { render, screen, fireEvent } from './test-utils.js';
import * as redux from 'react-redux';

describe('App component', () => {
  let selectorMock;
  beforeEach(() => {
    selectorMock = jest.spyOn(redux, 'useSelector');
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('renders only home component if user is not logged in', () => {
    selectorMock.mockReturnValue(false);
    render(<App />);
    expect(screen.getByText('Please login to continue')).toBeInTheDocument();
    expect(screen.queryByText('Jean')).not.toBeInTheDocument();
  });
  it('renders only shop component if user is logged in', () => {
    selectorMock.mockReturnValue(true);
    render(<App />);
    expect(screen.getByText('Jean')).toBeInTheDocument();
    expect(
      screen.queryByText('Please login to continue')
    ).not.toBeInTheDocument();
  });
  it('renders only cart component when clicked on cart link', () => {
    selectorMock.mockReturnValue([{ totalPrice: 2 }, { totalPrice: 8 }]);
    render(<App />);
    screen.debug();
    fireEvent.click(screen.getByText('Cart'));
    expect(screen.getByText('Total Amount:10$')).toBeInTheDocument();
    expect(screen.queryByText('Jean')).not.toBeInTheDocument();
  });
  it('renders only profile component when clicked on profile link', () => {
    selectorMock.mockReturnValue(true);
    render(<App />);
    fireEvent.click(screen.getByText('Profile'));
    expect(screen.getByText('New Password')).toBeInTheDocument();
    expect(screen.queryByText('Jean')).not.toBeInTheDocument();
  });
});
