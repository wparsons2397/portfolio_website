import React from "react";
import './ContentHeader.css';

function ContentHeader({ text }) {
    return (
        <div className="ContentHeader">
            <h1>{text}</h1>
        </div>
    )
}

export default ContentHeader;