import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import '@testing-library/jest-dom/extend-expect'; // Import this to use toBeInTheDocument

const renderNavBar = () => {
    render(
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>
    );
};

describe('NavBar', () => {
    test('renders', () => {
        renderNavBar();
        expect(screen.getByText('Portfolio')).toBeInTheDocument();
        expect(screen.getByText('Journal of an Expat')).toBeInTheDocument();
        expect(screen.getByText("Coder's Log")).toBeInTheDocument();
    });

    test('navigates to Portfolio', () => {
        renderNavBar();
        fireEvent.click(screen.getByText('Portfolio'));
        expect(window.location.pathname).toBe('/');
    });

    test('navigates to journal', () => {
        renderNavBar();
        fireEvent.click(screen.getByText('Journal of an Expat'));
        expect(window.location.pathname).toBe('/journal');
    });

    test('navigate to Log', () => {
        renderNavBar();
        fireEvent.click(screen.getByText("Coder's Log"));
        expect(window.location.pathname).toBe('/coderslog');
    });
});
