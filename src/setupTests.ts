/**
 * Jest setup file for React Native testing
 */

// Global test configuration
global.__DEV__ = true;

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  warn: jest.fn(),
  error: jest.fn(),
};

// Mock React Native Reanimated
jest.mock('react-native-reanimated', () => {
  const View = require('react-native-web').View;
  
  const mockAnimated = {
    View,
    Text: View,
    ScrollView: View,
    Image: View,
    createAnimatedComponent: (component: any) => component,
    interpolate: () => 0,
    Extrapolate: { CLAMP: 'clamp' },
    runOnJS: (fn: any) => fn,
    runOnUI: (fn: any) => fn,
    useSharedValue: (initial: any) => ({ value: initial }),
    useAnimatedStyle: (fn: any) => ({}),
    useAnimatedProps: (fn: any) => ({}),
    useDerivedValue: (fn: any) => ({ value: fn() }),
    useFrameCallback: () => {},
    useAnimatedScrollHandler: () => {},
    withTiming: (value: any) => value,
    withSpring: (value: any) => value,
    withDecay: (value: any) => value,
    Easing: {
      bezier: () => (t: number) => t,
      ease: (t: number) => t,
      quad: (t: number) => t,
    },
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
jest.mock('react-native-worklets-core', () => ({
  useRunInJS: () => (fn: any) => fn,
  useRunOnJS: () => (fn: any) => fn,
}));

// Mock Vector Icons
jest.mock('@expo/vector-icons', () => {
  const React = require('react');
  const { Text } = require('react-native-web');
  
  const createMockComponent = (name: string) => {
    const MockIcon = React.forwardRef((props: any, ref: any) =>
      React.createElement(Text, {
        ...props,
        ref,
        children: props.name || name,
        accessibilityLabel: props.name || name,
      })
    );
    MockIcon.displayName = name;
    return MockIcon;
  };
  
  return {
    Ionicons: createMockComponent('Ionicons'),
    MaterialIcons: createMockComponent('MaterialIcons'),
    FontAwesome: createMockComponent('FontAwesome'),
    AntDesign: createMockComponent('AntDesign'),
    MaterialCommunityIcons: createMockComponent('MaterialCommunityIcons'),
    Feather: createMockComponent('Feather'),
  };
});

// Mock React Native Vector Icons
jest.mock('react-native-vector-icons/MaterialIcons', () => {
  const React = require('react');
  const { Text } = require('react-native-web');
  return React.forwardRef((props: any, ref: any) => 
    React.createElement(Text, {
      ...props,
      ref,
      children: props.name || 'MaterialIcon',
      accessibilityLabel: props.name || 'MaterialIcon',
    })
  );
});

jest.mock('react-native-vector-icons/AntDesign', () => {
  const React = require('react');
  const { Text } = require('react-native-web');
  return React.forwardRef((props: any, ref: any) => 
    React.createElement(Text, {
      ...props,
      ref,
      children: props.name || 'AntDesignIcon',
      accessibilityLabel: props.name || 'AntDesignIcon',
    })
  );
});

jest.mock('react-native-vector-icons/FontAwesome6', () => {
  const React = require('react');
  const { Text } = require('react-native-web');
  return React.forwardRef((props: any, ref: any) => 
    React.createElement(Text, {
      ...props,
      ref,
      children: props.name || 'FontAwesome6Icon',
      accessibilityLabel: props.name || 'FontAwesome6Icon',
    })
  );
});

// Mock Emotion native and CSS
jest.mock('@emotion/native', () => {
  const React = require('react');
  const { View } = require('react-native-web');
  
  const mockStyled = new Proxy(() => View, {
    get: () => () => View,
  });
  
  return {
    default: mockStyled,
    styled: mockStyled,
    css: () => ({}),
  };
});

jest.mock('@emotion/css', () => ({
  css: () => 'mock-css-class',
}));

// Mock platform-specific modules
jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'web',
  select: (obj: any) => obj.web || obj.default,
}));
