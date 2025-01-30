import React from "react";
import './TestingContent.css';
import DisplayTestResults from "./DisplayTestResults";
import { Colors } from "../../constants/colors";

function TestingContent({ color = Colors.PRIMARY }) {
    return (
        <div className="TestingContent" style={{ background: color }}>
            <h1 aria-label="Testing Content Section"> Testing Summary </h1>
            <p>I am a firm believer in the importance of testing.</p>
            <p>So here's the output of all my tests for this codebase.</p>
            <h2>Test Results Summary</h2>
            <DisplayTestResults/>
        </div>
    )
}

export default TestingContent;