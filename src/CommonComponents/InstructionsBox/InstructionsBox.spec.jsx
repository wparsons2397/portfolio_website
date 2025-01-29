import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InstructionsBox from './InstructionsBox';

const steps = [
    { title: "Step 1", content: "Content for step 1", image: "step1.png" },
    { title: "Step 2", content: "Content for step 2", image: "step2.png" },
    { title: "Step 3", content: "Content for step 3", image: "step3.png" }
];

describe('InstructionsBox', () => {
    test('renders', () => {
        render(<InstructionsBox steps={steps} />);
        expect(screen.getByText('Step 1')).toBeInTheDocument();
    });

    test('displays the correct content for the current step', () => {
        render(<InstructionsBox steps={steps} />);
        expect(screen.getByText('Content for step 1')).toBeInTheDocument();
    });

    test('navigates to the next step', () => {
        render(<InstructionsBox steps={steps} />);
        fireEvent.click(screen.getByLabelText('Next Step'));
        expect(screen.getByText('Step 2')).toBeInTheDocument();
    });

    test('navigates to the previous step', () => {
        render(<InstructionsBox steps={steps} />);
        fireEvent.click(screen.getByLabelText('Next Step'));
        fireEvent.click(screen.getByLabelText('Previous Step'));
        expect(screen.getByText('Step 1')).toBeInTheDocument();
    });

    test('loops to the first step after the last step', () => {
        render(<InstructionsBox steps={steps} />);
        fireEvent.click(screen.getByLabelText('Next Step'));
        fireEvent.click(screen.getByLabelText('Next Step'));
        fireEvent.click(screen.getByLabelText('Next Step'));
        expect(screen.getByText('Step 1')).toBeInTheDocument();
    });

    test('loops to the last step when navigating back from the first step', () => {
        render(<InstructionsBox steps={steps} />);
        fireEvent.click(screen.getByLabelText('Previous Step'));
        expect(screen.getByText('Step 3')).toBeInTheDocument();
    });

    test('displays the correct image for the current step', () => {
        render(<InstructionsBox steps={steps} />);
        expect(screen.getByAltText('Step 1')).toHaveAttribute('src', 'step1.png');
    });
});
