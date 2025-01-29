import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Sidebar from './Sidebar';
import '@testing-library/jest-dom/extend-expect';

describe('Sidebar Component', () => {
    beforeEach(() => {
        render(<Sidebar />);
    });

    test('renders', () => {
        const sidebarElement = screen.getByText(/LinkedIn/i);
        expect(sidebarElement).toBeInTheDocument();
    });

    test('backToTop function scrolls to top', () => {
        window.scrollTo = jest.fn();
        const button = screen.getByText(/Back to the top/i);
        fireEvent.click(button);
        expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });

    test('links are valid', () => {
        const linkedinLink = screen.getByText(/LinkedIn/i).closest('a');
        const resumeLink = screen.getByText(/Resume Link WIP/i).closest('a');
        const githubLink = screen.getByText(/GitHub/i).closest('a');

        expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/william-parsons-23ct/');
        expect(resumeLink).toHaveAttribute('href', 'https://www.linkedin.com/in/william-parsons-23ct/');
        expect(githubLink).toHaveAttribute('href', 'https://github.com/wparsons2397/portfolio_website');
    });

    test('ensures that maximum height of top property never exceeds 225px', () => {
        const sidebarElement = screen.getByText(/LinkedIn/i).closest('.Sidebar');
        window.scrollTo = jest.fn();
        fireEvent.scroll(window, { target: { scrollY: 1000 } });
        expect(parseInt(sidebarElement.style.top, 10)).toBeLessThanOrEqual(225);
    });
});
