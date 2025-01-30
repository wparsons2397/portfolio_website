import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom/extend-expect'; // Import this to use toBeInTheDocument


beforeEach(() => {
  fetchMock.resetMocks();
});

describe('App', () => {
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

  test('navigates to journal page', async () => {
    render(
      <MemoryRouter initialEntries={['/journal']}>
        <App />
      </MemoryRouter>
    );

    const journalPageElement = await screen.findByText(/Journal - Diary of an Expat/i);
    expect(journalPageElement).toBeInTheDocument();
  });

  test('navigates to coders log page', async () => {
    render(
      <MemoryRouter initialEntries={['/coderslog']}>
        <App />
      </MemoryRouter>
    );

    const codersLogPageElement = await screen.findByText(/Coding Log/i);
    expect(codersLogPageElement).toBeInTheDocument();
  });

  // test('renders 404 page for unknown route', async () => {
  //   render(
  //     <MemoryRouter initialEntries={['/unknown']}>
  //       <App />
  //     </MemoryRouter>
  //   );

  //   const notFoundPageElement = await screen.findByText(/404 Not Found/i);
  //   expect(notFoundPageElement).toBeInTheDocument();
  // });
});
