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
            "outputDirectory": ".",
            "outputName": "test-results.xml"
        }]
    ]
};
