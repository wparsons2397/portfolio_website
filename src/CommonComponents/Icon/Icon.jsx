import React from "react";
import './Icon.css';

function Icon({pic, rotation = "none"}) {
    console.log(`Loading icon: Images/Icons/${pic}.png`); // Debugging line

    const rotationClass = `rotate-${rotation}`;

    return(
        <div className={`Icon ${rotationClass}`} aria-label={pic}>
            <img src={`Icons/${pic}.png`} alt={pic} height="40px" width="40px"></img>
        </div>
    )
}

export default Icon;
