import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app version', () => {
  render(<App />);
  const linkElement = screen.getByText(/v0.0/i);
  expect(linkElement).toBeInTheDocument();
});
