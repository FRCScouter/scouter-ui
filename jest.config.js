module.exports = {
	preset: "jest-expo",
	setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect", "<rootDir>/jest.setup.js"],
	testPathIgnorePatterns: ["/node_modules/", "/build/"],
	transformIgnorePatterns: [
		"/node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|expo(nent)?|@expo(nent)?/.*)",
	],
};
