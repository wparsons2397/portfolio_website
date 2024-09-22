import React from "react";
import './LargeFormContent.css';
import AboutMe from "../AboutMe/AboutMe";

function LargeFormContent({color}) {

    return(
        <div className="LargeFormContent" style={{background: color}}>
            <AboutMe/>
        </div>
    )
}

export default LargeFormContent;