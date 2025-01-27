import React, { useState } from "react";
import './AccessibilityContent.css';
import DropdownMenu from "../Common/DropdownMenu/DropdownMenu";
import Icon from "../../CommonComponents/Icon/Icon";
import InstructionsBox from "../../CommonComponents/InstructionsBox/InstructionsBox";
import MacSteps from "../../CommonComponents/InstructionsBox/MacInstructions.json";
import WindowsSteps from "../../CommonComponents/InstructionsBox/WindowsInstructions.json";


function AccessibilityContent({color}) {
    const [textbox, setTextbox] = useState();
    let AccessibilityOptions = [
        { value: 'New York', label: 'New York' },
        { value: 'Chicago', label: 'Chicago' },
        { value: 'London', label: 'London' },
        { value: 'Mexico City', label: 'Mexico City' },
        { value: 'Paris', label: 'Paris' },
        { value: 'Amsterdam', label: 'Amsterdam' },
        { value: 'Tokyo', label: 'Tokyo' },
    ];

    const lighterColor = "#66B2FF"; // Slightly lighter than #007BFF

    return(
        <div className="AccessibilityContent" style={{background: color}}>
            <h1 aria-label="Accessibility Content Section">Accessibility Content Section</h1>
            <p tabIndex={1}>One of the most important projects I have done was a website overhaul for screen readers & modern web accessibility.</p>
            <p tabIndex={1}>All of this section is designed to <a href="https://www.a11yproject.com/" tabIndex={1}>A11Y Standards</a>, which is linked for further reading</p> 
            <p>So have a look at what that looks like, theres some navigation tricks & tools to use to really test this out.</p>
            <div className="InstructionsBox-container">
                <div className="InstructionsBox-column">
                    <p>For Mac Users:</p>
                    <InstructionsBox steps={MacSteps.steps}/>
                </div>
                <div className="InstructionsBox-column">
                    <p>For Windows Users:</p>
                    <InstructionsBox steps={WindowsSteps.steps}/>
                </div>
            </div>
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
            <p> This is applied as well for dropdowns</p>
            <DropdownMenu options={AccessibilityOptions}></DropdownMenu>
            <hr className="AccessibilityContent-hr" style={{ borderColor: lighterColor }} />
            <h1 aria-label="Icons example">Icons</h1>
            <p> And now, Icons! </p>
            <div className="Icons-container">
                <Icon pic="document"/>
                <Icon pic="arrow"/>
                <Icon pic="web"/>
            </div>
        </div>
    )
}

export default AccessibilityContent;