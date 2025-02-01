import React, { useState } from "react";
import './AccessibilityContent.css';
import DropdownMenu from "../../CommonComponents/DropdownMenu/DropdownMenu";
import Icon from "../../CommonComponents/Icon/Icon";
import InstructionsBox from "../../CommonComponents/InstructionsBox/InstructionsBox";
import MacSteps from "../../CommonComponents/InstructionsBox/InstructionJson/MacInstructions.json";
import WindowsSteps from "../../CommonComponents/InstructionsBox/InstructionJson/WindowsInstructions.json";
import VerticalSeparator from "../../CommonComponents/VerticalSeparator/VerticalSeparator";
import HorizontalSeparator from "../../CommonComponents/HorizontalSeparator/HorizontalSeparator";
import { Colors } from "../../constants/colors";

function AccessibilityContent({ color }) {
    const [textbox, setTextbox] = useState('');

    let AccessibilityOptions = [
        { value: 'New York', label: 'New York' },
        { value: 'Chicago', label: 'Chicago' },
        { value: 'London', label: 'London' },
        { value: 'Mexico City', label: 'Mexico City' },
        { value: 'Paris', label: 'Paris' },
        { value: 'Amsterdam', label: 'Amsterdam' },
        { value: 'Tokyo', label: 'Tokyo' },
    ];

    return (
        <div className="AccessibilityContent" style={{ background: color }}>
            <h1 aria-label="Accessibility Content Section">Accessibility Content</h1>
            <p tabIndex={0}>One of the most important projects I have done was a website overhaul for screen readers & modern web accessibility.</p>
            <p tabIndex={0}>All of this section is designed to <a href="https://www.a11yproject.com/" tabIndex={0}>A11Y Standards</a>, which is linked for further reading</p>
            <p tabIndex={0}>So have a look at what that looks like, theres some navigation tricks & tools to use to really test this out.</p>
            <div className="InstructionsBox-container">
                <div className="InstructionsBox-column">
                    <p tabIndex={0}>For Mac Users:</p>
                    <InstructionsBox steps={MacSteps.steps} />
                </div>
                <div className="InstructionsBox-column">
                    <p tabIndex={0} >For Windows Users:</p>
                    <InstructionsBox steps={WindowsSteps.steps} />
                </div>
            </div>

            <HorizontalSeparator color={Colors.ACCENTTWO} />
            <h1 tabIndex={0}> Acessibility Examples </h1>
            <div className="AccessibilityExampleContainer">
                <div className="AccessibilityExample">
                    <h2 aria-label="Textbox example">Textboxes</h2>
                    <p tabIndex={0}>One of the neatest things about accessible textboxes is reading out the contents.</p>
                    <input
                        type="text"
                        value={textbox}
                        onChange={e => setTextbox(e.target.value)}
                        placeholder="Enter a message"
                        aria-placeholder="Enter a message"
                        aria-live="polite"
                    />
                </div>
                <VerticalSeparator color={Colors.ACCENTTWO} />
                <div className="AccessibilityExample">
                    <h2 aria-label="Dropdown example">Dropdowns</h2>
                    <p>This is applied as well for dropdowns, always inform your users</p>
                    <DropdownMenu options={AccessibilityOptions}></DropdownMenu>
                </div>
                <VerticalSeparator color={Colors.ACCENTTWO} />
                <div className="AccessibilityExample">
                    <h2 aria-label="Icons example">Icons</h2>
                    <p>Even page icons deserve to be read out!</p>
                    <div className="Icons-container">
                        <Icon pic="document" />
                        <Icon pic="arrow" />
                        <Icon pic="web" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccessibilityContent;