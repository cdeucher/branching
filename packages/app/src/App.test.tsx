import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

export function label(name:any) {
  return `Hello ${name.toUpperCase()}`;
}

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Version/i);
  expect(linkElement).toBeInTheDocument();
});

test('generates a label', () => {
  const result = label("React");
  expect(result).toEqual("Hello REACT");
});