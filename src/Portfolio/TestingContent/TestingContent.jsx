import React from "react";
import './TestingContent.css';
import DisplayTestResults from "./DisplayTestResults";

function TestingContent({ color }) {
    return (
        <div className="TestingContent" style={{ background: color }}>
            <h1 aria-label="Testing Content Section"> I am a firm believer in the importance of testing</h1>
            <p>So here's the output of all my tests.</p>
            <DisplayTestResults/>
        </div>
    )
}

export default TestingContent;