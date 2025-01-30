const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const xmlFilePath = path.join(__dirname, '../../../public/test-results.xml');
const jsonFilePath = path.join(__dirname, '../../../public/test-results.json');

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
            return {
                name,
                tests: parseInt(testsuite.$.tests, 10),
                failures: parseInt(testsuite.$.failures, 10),
                skipped: parseInt(testsuite.$.skipped, 10),
                errors: parseInt(testsuite.$.errors, 10)
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
