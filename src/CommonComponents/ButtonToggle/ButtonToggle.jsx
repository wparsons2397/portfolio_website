import React from 'react';
import './ButtonToggle.css';

function ButtonToggle({ isExpanded, onClick }) {
    return (
        <button
            onClick={onClick}
            className="ButtonToggle"
            aria-label={isExpanded ? 'Show Less' : 'Show More'}
        >
            {isExpanded ? 'Show Less' : 'Show More'}
        </button>
    );
}

export default ButtonToggle;
