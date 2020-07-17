import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

afterEach(() => cleanup());

describe('render test', () => {
  test('should show driver id 976659', () => {
    const { getByTestId } = render(<App />);
    const driverId = getByTestId('driverId976659');
    expect(driverId).toBeInTheDocument();
  });
});
