module.exports = (api) => {
	api.cache(false);
	return {
		presets: ["babel-preset-expo"],
		plugins: ["react-native-worklets/plugin"],
	};
};

// "@babel/plugin-transform-logical-assignment-operators