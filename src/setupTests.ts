/**
 * Jest setup file for React Native testing
 */
/** biome-ignore-all lint/correctness/noUnusedFunctionParameters: Broken jest config */
/** biome-ignore-all lint/suspicious/noExplicitAny: Jest is broken */

// Global test configuration
global.__DEV__ = true;

// Mock console methods to reduce noise in tests
global.console = {
	...console,
	error: jest.fn(),
	warn: jest.fn(),
};

// Mock React Native Reanimated
jest.mock("react-native-reanimated", () => {
	const View = require("react-native-web").View;

	const mockAnimated = {
		createAnimatedComponent: (component: any) => component,
		Easing: {
			bezier: () => (t: number) => t,
			ease: (t: number) => t,
			quad: (t: number) => t,
		},
		Extrapolate: { CLAMP: "clamp" },
		Image: View,
		interpolate: () => 0,
		runOnJS: (fn: any) => fn,
		runOnUI: (fn: any) => fn,
		ScrollView: View,
		Text: View,
		useAnimatedProps: (fn: any) => ({}),
		useAnimatedScrollHandler: () => {},
		useAnimatedStyle: (fn: any) => ({}),
		useDerivedValue: (fn: any) => ({ value: fn() }),
		useFrameCallback: () => {},
		useSharedValue: (initial: any) => ({ value: initial }),
		View,
		withDecay: (value: any) => value,
		withSpring: (value: any) => value,
		withTiming: (value: any) => value,
	};

	return {
		default: mockAnimated,
		...mockAnimated,
		Easing: {
			bezier: () => (t: number) => t,
			ease: (t: number) => t,
			quad: (t: number) => t,
		},
	};
});

// Mock React Native Worklets
jest.mock("react-native-worklets-core", () => ({
	useRunInJS: () => (fn: any) => fn,
	useRunOnJS: () => (fn: any) => fn,
}));

// Mock Vector Icons
jest.mock("@expo/vector-icons", () => {
	const React = require("react");
	const { Text } = require("react-native-web");

	const createMockComponent = (name: string) => {
		const MockIcon = React.forwardRef((props: any, ref: any) =>
			React.createElement(Text, {
				...props,
				accessibilityLabel: props.name || name,
				children: props.name || name,
				ref,
			}),
		);
		MockIcon.displayName = name;
		return MockIcon;
	};

	return {
		AntDesign: createMockComponent("AntDesign"),
		Feather: createMockComponent("Feather"),
		FontAwesome: createMockComponent("FontAwesome"),
		Ionicons: createMockComponent("Ionicons"),
		MaterialCommunityIcons: createMockComponent("MaterialCommunityIcons"),
		MaterialIcons: createMockComponent("MaterialIcons"),
	};
});

// Mock React Native Vector Icons
jest.mock("react-native-vector-icons/MaterialIcons", () => {
	const React = require("react");
	const { Text } = require("react-native-web");
	return React.forwardRef((props: any, ref: any) =>
		React.createElement(Text, {
			...props,
			accessibilityLabel: props.name || "MaterialIcon",
			children: props.name || "MaterialIcon",
			ref,
		}),
	);
});

jest.mock("react-native-vector-icons/AntDesign", () => {
	const React = require("react");
	const { Text } = require("react-native-web");
	return React.forwardRef((props: any, ref: any) =>
		React.createElement(Text, {
			...props,
			accessibilityLabel: props.name || "AntDesignIcon",
			children: props.name || "AntDesignIcon",
			ref,
		}),
	);
});

jest.mock("react-native-vector-icons/FontAwesome6", () => {
	const React = require("react");
	const { Text } = require("react-native-web");
	return React.forwardRef((props: any, ref: any) =>
		React.createElement(Text, {
			...props,
			accessibilityLabel: props.name || "FontAwesome6Icon",
			children: props.name || "FontAwesome6Icon",
			ref,
		}),
	);
});

// Mock Emotion native and CSS
jest.mock("@emotion/native", () => {
	const { View } = require("react-native-web");

	const mockStyled = new Proxy(() => View, {
		get: () => () => View,
	});

	return {
		css: () => ({}),
		default: mockStyled,
		styled: mockStyled,
	};
});

jest.mock("@emotion/css", () => ({
	css: () => "mock-css-class",
}));

// Mock platform-specific modules
jest.mock("react-native/Libraries/Utilities/Platform", () => ({
	OS: "web",
	select: (obj: any) => obj.web || obj.default,
}));
