import React, { useState } from "react";
import './AccessibilityContent.css';
import DropdownMenu from "../Common/DropdownMenu/DropdownMenu";
import Icon from "../../CommonComponents/Icon/Icon";

function AccessibilityContent({color}) {
    const [textbox, setTextbox] = useState();
    let AccessibilityOptions = [
        { value: 'New York', label: 'New York' },
        { value: 'Chicago', label: 'Chicago' },
        { value: 'London', label: 'London' },
    ];

    const lighterColor = "#66B2FF"; // Slightly lighter than #007BFF

    return(
        <div className="AccessibilityContent" style={{background: color}}>
            <h1 aria-label="Accessibility Content Section">Accessibility Content Section</h1>
            <p tabIndex={1}>One of the most important projects I have done was a website overhaul for screen readers & modern web accessibility.</p>
            <p tabIndex={1}>All of this section is designed to <a href="https://www.a11yproject.com/" tabIndex={1}>A11Y Standards</a>, which is linked for further reading</p> 
            <p>So have a look at what that looks like, theres some navigation tricks & tools to use to really test this out.</p>
            <p>For Mac Users:</p>
            <div>Open System Settings</div>
            <div>Scroll in the left sidebar to Accessibility</div>
            <div>Click VoiceOver in the Vision Section</div>
            <div>Toggle VoiceOver on via the switch</div>
            <hr className="AccessibilityContent-hr" style={{ borderColor: lighterColor }} /> 
            <h1 aria-label="Textbox example">Textbox</h1>
            <p tabIndex={1}>Below this is a textbox - notice that the screen reader announcement changes based on the contents</p>
            <input
                type="text"
                value={textbox}
                onChange={e => setTextbox(e.target.value)}
                placeholder="Enter a message"
                aria-placeholder="Enter a message"
                aria-live="polite"
            />
            <hr className="AccessibilityContent-hr" style={{ borderColor: lighterColor }} />
            <h1 aria-label="Dropdown example">Dropdown</h1>
            <p> This is appled as well for dropdowns</p>
            {/* <p>Notice that every item in the dropdown menu above will read out the option's name and if it is selected!</p> */}
            {/* <p>Dropdown example</p> */}
            <DropdownMenu options={AccessibilityOptions}></DropdownMenu>
            <hr className="AccessibilityContent-hr" style={{ borderColor: lighterColor }} />
            <h1 aria-label="Icons example">Icons</h1>

            <Icon pic="document"></Icon>

            {/* <p style={{zIndex:10}}> This is my portfolio website, it is currently under construction. Please come back at a later date.</p> */}
        </div>
    )
}

export default AccessibilityContent;