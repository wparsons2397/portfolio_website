module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
    },
    transformIgnorePatterns: [
        "/node_modules/(?!axios|@babel/runtime)/" // Ensure axios and @babel/runtime are transformed
    ],
    extensionsToTreatAsEsm: [".jsx"], // Treat .jsx files as ES Modules
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy" // Mock CSS imports
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
