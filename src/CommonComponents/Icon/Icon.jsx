import React from "react";
import './Icon.css';

function Icon({ pic, rotation = "none", isButton = false }) {
    // console.log(`Loading icon: Images/Icons/${pic}.png`); // Debugging line

    const rotationClass = `rotate-${rotation}`;
    const isButtonForAccessibility = isButton ? "" : 0;

    return (
        <div className={`Icon ${rotationClass}`} aria-label={pic} tabIndex={isButtonForAccessibility}>
            <img src={`Icons/${pic}.png`} alt={pic} height="40px" width="40px"></img>
        </div>
    )
}

export default Icon;
