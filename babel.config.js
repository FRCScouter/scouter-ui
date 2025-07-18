module.exports = (api) => {
	api.cache(true);
	return {
		plugins: ["react-native-reanimated/plugin", "@babel/plugin-transform-logical-assignment-operators"],
		presets: ["babel-preset-expo"],
	};
};
