import React, { useEffect, useState } from 'react';
import './DisplayTestResults.css';
import HorizontalSeparator from '../../../CommonComponents/HorizontalSeparator/HorizontalSeparator';
import Spacer from '../../../CommonComponents/Spacer/Spacer';
import ButtonToggle from '../../../CommonComponents/ButtonToggle/ButtonToggle';
import { Colors } from '../../../constants/colors';

const DisplayTestResults = () => {
    const [testResults, setTestResults] = useState(null);
    const [error, setError] = useState(null);
    const [expandedSections, setExpandedSections] = useState({});

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

    const toggleSection = (name) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [name]: !prevState[name]
        }));
    };

    if (error) {
        return <div>Error fetching test results: {error.message}</div>;
    }

    if (!testResults) {
        return <div>Loading test results...</div>;
    }

    const totalTests = testResults.reduce((sum, result) => sum + result.tests, 0);
    const totalFailures = testResults.reduce((sum, result) => sum + result.failures, 0);
    const passPercentage = ((totalTests - totalFailures) / totalTests) * 100;

    return (
        <div>
            <div className="TestSummaryRow" data-testid="TestSummaryRow">
                <div>Total number of tests: {totalTests}</div>
                <div>Percentage of passing tests: {passPercentage.toFixed(2)}%</div>
            </div>
            {testResults.map((result, index) => {
                const passingTests = result.tests - result.failures;
                return (
                    <React.Fragment key={result.name}>
                        <div className='ResultsSummary' data-testid="ResultsSummary">
                            <div className='ResultsSectionHeader' data-testid="ResultsSectionHeader">
                                {result.name} Section Summary
                                <span>Passing tests: {passingTests}</span>
                                <ButtonToggle
                                    isExpanded={expandedSections[result.name]}
                                    onClick={() => toggleSection(result.name)}
                                />
                            </div>
                            {expandedSections[result.name] && (
                                <>
                                    <HorizontalSeparator color={Colors.ACCENTONE} />
                                    <div className='ResultsSectionContent' data-testid="ResultsSectionContent">
                                        <p>Number of tests: {result.tests} </p>
                                        <p>Number of tests failing: {result.failures} </p>
                                        <p>Tests Skipped: {result.skipped} </p>
                                        <p>Errors: {result.errors} </p>
                                    </div>
                                </>
                            )}
                        </div>
                        {index < testResults.length - 1 && <Spacer spacer="10px" color={Colors.PRIMARY} />}
                    </React.Fragment>
                );
            })}
        </div>
    );
};

export default DisplayTestResults;
