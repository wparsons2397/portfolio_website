import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom/extend-expect'; // Import this to use toBeInTheDocument


beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders main page', async () => {
  fetchMock.mockResponseOnce(JSON.stringify({ message: 'success' }));

  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const mainPageElement = await screen.findByText(/Will Parsons/i);
  expect(mainPageElement).toBeInTheDocument();
});
