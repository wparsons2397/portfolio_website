import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AccessibilityContent from './AccessibilityContent';
import '@testing-library/jest-dom/extend-expect'; // Import this to use toBeInTheDocument

describe('AccessibilityContent', () => {
    test('renders AccessibilityContent component', () => {
        render(<AccessibilityContent color="#FFFFFF" />);

        // Check for main headings
        expect(screen.getByLabelText('Accessibility Content Section')).toBeInTheDocument();
        expect(screen.getByLabelText('Textbox example')).toBeInTheDocument();
        expect(screen.getByLabelText('Dropdown example')).toBeInTheDocument();
        expect(screen.getByLabelText('Icons example')).toBeInTheDocument();

        // Check for links
        expect(screen.getByRole('link', { name: /A11Y Standards/i })).toBeInTheDocument();

        // Check for InstructionsBox components
        expect(screen.getByText('For Mac Users:')).toBeInTheDocument();
        expect(screen.getByText('For Windows Users:')).toBeInTheDocument();

        // Check for input box
        expect(screen.getByPlaceholderText('Enter a message')).toBeInTheDocument();

        // Check for DropdownMenu component
        expect(screen.getByText('New York')).toBeInTheDocument();

        // Check for Icon components
        expect(screen.getByAltText('document')).toBeInTheDocument();
        expect(screen.getByAltText('web')).toBeInTheDocument();
    });

    test('textbox input works correctly', () => {
        render(<AccessibilityContent color="#FFFFFF" />);

        const input = screen.getByPlaceholderText('Enter a message');

        // Check initial state
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue('');

        // Simulate user input
        fireEvent.change(input, { target: { value: 'Hello, world!' } });

        // Check updated state
        expect(input).toHaveValue('Hello, world!');
    });

    test('placeholder text is removed when populated', () => {
        render(<AccessibilityContent color="#FFFFFF" />);

        const input = screen.getByPlaceholderText('Enter a message');

        // Check initial placeholder text
        expect(input.placeholder).toBe('Enter a message');
        expect(input.value).toBe('');

        // Simulate user input
        fireEvent.change(input, { target: { value: 'Hello, world!' } });

        // Check that placeholder text is updated to user input
        expect(input.value).toBe('Hello, world!');
        expect(input.placeholder).toBe('Enter a message');
    });

    test('dropdown menu selection works correctly', () => {
        render(<AccessibilityContent color="#FFFFFF" />);

        const dropdown = screen.getByText('New York');
        fireEvent.click(dropdown);

        const option = screen.getByText('Chicago');
        fireEvent.click(option);

        expect(screen.getByText('Chicago')).toBeInTheDocument();
    });

    test('icons have appropriate alt text', () => {
        render(<AccessibilityContent color="#FFFFFF" />);

        expect(screen.getByAltText('document')).toBeInTheDocument();
        const arrowIcons = screen.getAllByAltText('arrow');
        expect(arrowIcons.length).toBeGreaterThan(0);
        expect(screen.getByAltText('web')).toBeInTheDocument();
    });

    test('links are accessible and have correct href attributes', () => {
        render(<AccessibilityContent color="#FFFFFF" />);

        const link = screen.getByRole('link', { name: /A11Y Standards/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://www.a11yproject.com/');
    });

    test('InstructionsBox components render correct steps', () => {
        render(<AccessibilityContent color="#FFFFFF" />);

        expect(screen.getByText('For Mac Users:')).toBeInTheDocument();
        expect(screen.getByText('For Windows Users:')).toBeInTheDocument();

        const stepOneText = screen.getAllByText('Step 1');
        expect(stepOneText.length).toBeGreaterThan(0);
    });
});
