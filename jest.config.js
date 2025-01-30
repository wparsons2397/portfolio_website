module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy"
    },
    setupFiles: ["<rootDir>/jest.setup.js"], // Add this line to include the setup file
    reporters: [
        "default",
        ["jest-junit", {
            "outputDirectory": "./public",
            "outputName": "test-results.xml",
            "classNameTemplate": "{classname}",
            "titleTemplate": "{title}",
            "ancestorSeparator": " › ",
            "suiteNameTemplate": "{filepath}",
            "includeConsoleOutput": "true",
            "includeShortConsoleOutput": "true",
            "addFileAttribute": "true",
            "usePathForSuiteName": "true",
            "uniqueOutputName": "false",
            "includeTestSuiteFailure": "true",
            "includeTestSuiteSuccess": "true" // Add this line to include the number of test successes
        }]
    ]
};
