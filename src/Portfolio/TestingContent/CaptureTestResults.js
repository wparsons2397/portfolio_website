const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const xml2js = require('xml2js');

const xmlFilePath = path.join(__dirname, '../../../public/test-results.xml');
const jsonFilePath = path.join(__dirname, '../../../public/test-results.json');

// Run tests and capture results
exec('npm test -- --json --outputFile=./test-results.json --watchAll=false', (err, stdout, stderr) => {
    if (err) {
        console.error('Error running tests:', err);
        // Continue processing the results even if some tests fail
    }

    // Read the JSON test results
    const jsonFilePathTemp = path.join(__dirname, '../../../test-results.json');
    fs.readFile(jsonFilePathTemp, (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return;
        }

        const testResults = JSON.parse(data);
        const testSuitesXml = {
            testsuites: {
                testsuite: testResults.testResults.map(suite => {
                    const suiteTime = suite.perfStats ? suite.perfStats.runtime / 1000 : (suite.endTime - suite.startTime) / 1000;
                    return {
                        $: {
                            name: path.basename(suite.name, path.extname(suite.name)).replace(/(\.spec|\.test)$/, ''),
                            tests: suite.assertionResults.length,
                            failures: suite.numFailingTests,
                            errors: suite.numRuntimeErrorTestSuites,
                            skipped: suite.numPendingTests,
                            time: suiteTime
                        },
                        testcase: suite.assertionResults.map(testCase => ({
                            $: {
                                classname: testCase.ancestorTitles.join(' '),
                                name: testCase.title,
                                status: testCase.status
                            }
                        }))
                    };
                })
            }
        };

        // Generate XML file
        const builder = new xml2js.Builder();
        const xml = builder.buildObject(testSuitesXml);
        fs.writeFileSync(xmlFilePath, xml);
        console.log('Test results saved to test-results.xml');

        // Parse XML to JSON
        fs.readFile(xmlFilePath, (err, data) => {
            if (err) {
                console.error('Error reading XML file:', err);
                return;
            }

            xml2js.parseString(data, (err, result) => {
                if (err) {
                    console.error('Error parsing XML file:', err);
                    return;
                }

                const testsuites = result.testsuites.testsuite;
                const summary = testsuites.map(testsuite => {
                    const name = path.basename(testsuite.$.name)
                        .replace(/(\.spec|\.test)\.jsx?$/, '')
                        .replace(/([a-z])([A-Z])/g, '$1 $2'); // Add space between words

                    const failures = testsuite.testcase.filter(testcase => testcase.$.status === 'failed').length;
                    const errors = testsuite.testcase.filter(testcase => testcase.$.status === 'error').length;
                    const skipped = testsuite.testcase.filter(testcase => testcase.$.status === 'skipped').length;

                    return {
                        name,
                        tests: parseInt(testsuite.$.tests, 10),
                        failures,
                        errors,
                        skipped
                    };
                });

                fs.writeFile(jsonFilePath, JSON.stringify(summary, null, 2), (err) => {
                    if (err) {
                        console.error('Error writing JSON file:', err);
                        return;
                    }
                    console.log('Testing summary saved to test-results.json');
                });
            });
        });
    });
});
