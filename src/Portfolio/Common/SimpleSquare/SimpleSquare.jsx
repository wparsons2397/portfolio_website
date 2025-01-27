import React from "react";
import './SimpleSquare.css';

function SimpleSquare({text,pic}) {
    return(
        <div className="SimpleSquare" >
            <h4 aria-label={text} tabIndex={1}>{text}</h4>
            <img src={`Images/Tech/${pic}.png`} alt={pic} height="140px" width="140px"></img>
        </div>
    )
}

export default SimpleSquare;