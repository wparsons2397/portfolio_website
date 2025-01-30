import React, { useState } from "react";
import './InstructionsBox.css';
import Icon from "../Icon/Icon";
import { Colors } from "../../constants/colors";

function InstructionsBox({ steps = [{ title: "Default Step", content: "This is the default step content.", image: null }] }) {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        setCurrentStep((currentStep + 1) % steps.length);
    };

    const prevStep = () => {
        setCurrentStep((currentStep - 1 + steps.length) % steps.length);
    };

    return (
        <div className="InstructionsBox">
            <div className="InstructionsBox-header">
                <h2>{steps[currentStep]?.title || "No Title"}</h2>
            </div>
            <div className="InstructionsBox-content">
                {steps[currentStep]?.content || "No Content"}
            </div>
            {steps[currentStep]?.image && (
                <div className="InstructionsBox-image">
                    <img src={steps[currentStep].image} alt={steps[currentStep]?.title || "Step Image"} />
                </div>
            )}
            <div className="InstructionsBox-footer">
                <button onClick={() => prevStep()} aria-label="Previous Step" className="icon-button">
                    <Icon pic="arrow" rotation="down" isButton="true"/>
                </button>
                <span>{currentStep + 1} / {steps.length}</span>
                <button onClick={() => nextStep()} aria-label="Next Step" className="icon-button">
                    <Icon pic="arrow" rotation="up" isButton="true"/>
                </button>
            </div>
        </div>
    );
}

export default InstructionsBox;
