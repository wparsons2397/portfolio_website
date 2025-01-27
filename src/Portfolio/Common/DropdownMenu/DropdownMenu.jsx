import React, { useState } from "react";
import './DropdownMenu.css';

function DropdownMenu({options, languageChange}) {
    const [selectedValue, setSelectedValue] = useState('');

    let displayOptions;
    if(Array.isArray(options) && options.length)
    {
        displayOptions = options;
    }
    else
    {
        displayOptions = [
            { value: 'Option 1', label: 'Option 1' },
            { value: 'Option 2', label: 'Option 2' },
            { value: 'Option 3', label: 'Option 3' },
            ];
    }

    return (
        <select
            className="DropdownMenu"
            value={selectedValue}
            onChange={(e) => { 
                setSelectedValue(e.target.value);
                languageChange(e.target.value);
            }}
            label='Dropdown Menu'
            aria-label='Dropdown Menu'
        >
            {displayOptions.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
    

export default DropdownMenu;