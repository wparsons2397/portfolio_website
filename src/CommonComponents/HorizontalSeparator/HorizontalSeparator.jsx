import React from 'react';
import './HorizontalSeparator.css';

const HorizontalSeparator = ({ color }) => {
    return <hr className="HorizontalSeparator" style={{ borderColor: color }} />;
};

export default HorizontalSeparator;
