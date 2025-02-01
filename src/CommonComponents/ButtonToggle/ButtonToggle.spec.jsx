import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ButtonToggle from './ButtonToggle';

describe('ButtonToggle', () => {
    test('renders with "Show More" when isExpanded is false', () => {
        render(<ButtonToggle isExpanded={false} onClick={() => { }} />);
        expect(screen.getByRole('button')).toHaveTextContent('Show More');
    });

    test('renders with "Show Less" when isExpanded is true', () => {
        render(<ButtonToggle isExpanded={true} onClick={() => { }} />);
        expect(screen.getByRole('button')).toHaveTextContent('Show Less');
    });

    test('calls onClick when button is clicked', () => {
        const handleClick = jest.fn();
        render(<ButtonToggle isExpanded={false} onClick={handleClick} />);
        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
