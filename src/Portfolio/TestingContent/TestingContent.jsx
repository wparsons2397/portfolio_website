import React from "react";
import './TestingContent.css';
import DisplayTestResults from "./DisplayTestResults/DisplayTestResults";
import { Colors } from "../../constants/colors";

function TestingContent({ color = Colors.PRIMARY }) {
    return (
        <div className="TestingContent" style={{ background: color }}>
            <h1 aria-label="Testing Content Section"> Testing Summary </h1>
            <p>I am a firm believer in the importance of testing - and it's something I strive to incorporate for best practice and my own sanity.</p>
            <p>So here's the output of all my tests for this codebase, set up via a script</p>
            <h2>Test Results Summary</h2>
            <DisplayTestResults />
        </div>
    )
}

export default TestingContent;