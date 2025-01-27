import React from "react";
import './Sidebar.css';
import Spacer from "../../CommonComponents/Spacer/Spacer";

function Sidebar() {
    
    const backToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return(
        <div className="Sidebar">
            <Spacer spacer="100px" color="#a0a0a0"/>
            <a id="L1" href="https://www.linkedin.com/in/william-parsons-23ct/">LinkedIn</a>
            <Spacer spacer="100px" color="#a0a0a0"/>
            <a id="L2" href="https://www.linkedin.com/in/william-parsons-23ct/">Resume Link WIP </a>
            <Spacer spacer="100px" color="#a0a0a0"/>
            <a id="L3" href="https://github.com/wparsons2397/portfolio_website">GitHub</a>
            <Spacer spacer="100px" color="#a0a0a0"/>
            <button onClick={backToTop} id="backToTop">Back to the top</button>
        </div>
    )
}

export default Sidebar;