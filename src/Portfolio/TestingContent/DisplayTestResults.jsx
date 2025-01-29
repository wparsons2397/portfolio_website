import React, { useEffect, useState } from 'react';

const DisplayTestResults = () => {
    const [testResults, setTestResults] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/test-results.json') // Update the path to point to the public directory
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
            <h1>Test Results</h1>
            <pre>{JSON.stringify(testResults, null, 2)}</pre>
        </div>
    );
};

export default DisplayTestResults;
