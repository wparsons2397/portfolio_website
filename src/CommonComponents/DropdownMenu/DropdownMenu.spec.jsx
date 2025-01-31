import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DropdownMenu from './DropdownMenu';

describe('DropdownMenu', () => {
    const mockLanguageChange = jest.fn();
    const options = [
        { value: 'Option 1', label: 'Option 1' },
        { value: 'Option 2', label: 'Option 2' },
        { value: 'Option 3', label: 'Option 3' },
    ];

    it('renders', () => {
        render(<DropdownMenu options={options} languageChange={mockLanguageChange} />);
    });

    it('displays the correct options', () => {
        const { getByLabelText } = render(<DropdownMenu options={options} languageChange={mockLanguageChange} />);
        const selectElement = getByLabelText('Dropdown Menu');
        expect(selectElement.children.length).toBe(options.length);
    });

    it('calls languageChange with the correct value when an option is selected', () => {
        const { getByLabelText } = render(<DropdownMenu options={options} languageChange={mockLanguageChange} />);
        const selectElement = getByLabelText('Dropdown Menu');
        fireEvent.change(selectElement, { target: { value: 'Option 2' } });
        expect(mockLanguageChange).toHaveBeenCalledWith('Option 2');
    });
});
