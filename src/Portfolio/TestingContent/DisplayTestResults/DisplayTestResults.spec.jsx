import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import DisplayTestResults from './DisplayTestResults';

const mockTestResults = [
    {
        name: 'Section 1',
        tests: 10,
        failures: 2,
        skipped: 1,
        errors: 0
    },
    {
        name: 'Section 2',
        tests: 5,
        failures: 1,
        skipped: 0,
        errors: 1
    }
];

describe('DisplayTestResults', () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockTestResults),
            })
        );
    });

    test('renders all basic components', async () => {
        render(<DisplayTestResults />);

        const resultsSummary = await screen.findAllByTestId('ResultsSummary');
        const resultsSectionHeader = await screen.findAllByTestId('ResultsSectionHeader');
        const testSummaryRow = screen.getByTestId('TestSummaryRow');

        expect(resultsSummary.length).toBeGreaterThan(0);
        expect(resultsSectionHeader.length).toBeGreaterThan(0);
        expect(testSummaryRow).toBeInTheDocument();
    });

    test('toggles section visibility', async () => {
        render(<DisplayTestResults />);

        const toggleButton = await screen.findAllByRole('button');
        fireEvent.click(toggleButton[0]);

        const resultsSectionContent = screen.getByTestId('ResultsSectionContent');
        expect(resultsSectionContent).toBeVisible();

        fireEvent.click(toggleButton[0]);
        expect(resultsSectionContent).not.toBeVisible();
    });

    test('displays error message on fetch error', async () => {
        global.fetch = jest.fn(() =>
            Promise.reject(new Error('Network response was not ok'))
        );

        render(<DisplayTestResults />);

        const errorMessage = await screen.findByText(/Error fetching test results/i);
        expect(errorMessage).toBeInTheDocument();
    });

    test('displays loading message when no test results', () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(null),
            })
        );

        render(<DisplayTestResults />);

        const loadingMessage = screen.getByText(/Loading test results/i);
        expect(loadingMessage).toBeInTheDocument();
    });

    test('calculates total tests and pass percentage correctly', async () => {
        render(<DisplayTestResults />);

        await waitFor(() => {
            const testSummaryRow = screen.getByTestId('TestSummaryRow');
            expect(testSummaryRow).toHaveTextContent('Total number of tests: 15');
            expect(testSummaryRow).toHaveTextContent('Percentage of passing tests: 80.00%');
        });
    });

    test('renders multiple sections correctly', async () => {
        render(<DisplayTestResults />);

        const resultsSummary = await screen.findAllByTestId('ResultsSummary');
        expect(resultsSummary.length).toBe(2);
    });

});
