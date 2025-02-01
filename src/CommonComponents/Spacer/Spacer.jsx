import React from "react";
import './Spacer.css';

function Spacer({ spacer, color = "black" }) {
    return (
        <div className="Spacer" style={{ height: spacer, backgroundColor: color }} />
    )
}

export default Spacer;