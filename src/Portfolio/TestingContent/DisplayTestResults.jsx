import React, { useEffect, useState } from 'react';
import './DisplayTestResults.css';
import HorizontalSeparator from '../../CommonComponents/HorizontalSeparator/HorizontalSeparator';
import { Colors } from '../../constants/colors';

const DisplayTestResults = () => {
    const [testResults, setTestResults] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/test-results.json') // Update the path to point to the JSON file
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setTestResults(data))
            .catch(error => setError(error));
    }, []);

    if (error) {
        return <div>Error fetching test results: {error.message}</div>;
    }

    if (!testResults) {
        return <div>Loading test results...</div>;
    }

    return (
        <div>
            {testResults.map((result) => (
                <div className='ResultsSummary' key={result.name}>
                    <div className='ResultsSectionHeader'> {result.name} Section Summary</div>
                    <HorizontalSeparator color={Colors.ACCENTONE}/>
                    <div className='ResultsSectionContent'>
                        <p>Number of tests: {result.tests} </p>
                        <p>Number of tests failing: {result.failures} </p>
                        <p>Tests Skipped: {result.skipped} </p>
                        <p>Errors: {result.errors} </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DisplayTestResults;
