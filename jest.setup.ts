// Mock react-native-reanimated
jest.mock('react-native-reanimated', () => {
  const View = require('react-native').View;
  
  return {
    __esModule: true,
    default: {
      View,
      Text: require('react-native').Text,
      Image: require('react-native').Image,
      ScrollView: require('react-native').ScrollView,
      FlatList: require('react-native').FlatList,
      createAnimatedComponent: (Component: any) => Component,
      interpolate: () => 0,
      Value: jest.fn(() => ({
        setValue: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        removeAllListeners: jest.fn(),
        stopAnimation: jest.fn(),
        resetAnimation: jest.fn(),
        interpolate: jest.fn(() => 0),
        animate: jest.fn(),
        stopTracking: jest.fn(),
        track: jest.fn(),
      })),
      timing: jest.fn(() => ({
        start: jest.fn(),
      })),
      spring: jest.fn(() => ({
        start: jest.fn(),
      })),
      decay: jest.fn(() => ({
        start: jest.fn(),
      })),
      sequence: jest.fn(),
      parallel: jest.fn(),
      stagger: jest.fn(),
      loop: jest.fn(),
      delay: jest.fn(),
      event: jest.fn(),
      call: jest.fn(),
      block: jest.fn(),
      cond: jest.fn(),
      set: jest.fn(),
      Code: View,
      Clock: jest.fn(),
      Node: jest.fn(),
      add: jest.fn(),
      eq: jest.fn(),
      neq: jest.fn(),
      lessThan: jest.fn(),
      greaterThan: jest.fn(),
      lessOrEq: jest.fn(),
      greaterOrEq: jest.fn(),
      startClock: jest.fn(),
      stopClock: jest.fn(),
      clockRunning: jest.fn(),
      and: jest.fn(),
      or: jest.fn(),
      defined: jest.fn(),
      not: jest.fn(),
      concat: jest.fn(),
      sub: jest.fn(),
      multiply: jest.fn(),
      divide: jest.fn(),
      pow: jest.fn(),
      modulo: jest.fn(),
      sqrt: jest.fn(),
      log: jest.fn(),
      sin: jest.fn(),
      cos: jest.fn(),
      tan: jest.fn(),
      acos: jest.fn(),
      asin: jest.fn(),
      atan: jest.fn(),
      exp: jest.fn(),
      round: jest.fn(),
      floor: jest.fn(),
      ceil: jest.fn(),
      abs: jest.fn(),
      max: jest.fn(),
      min: jest.fn(),
      proc: jest.fn(),
      useValue: jest.fn(() => 0),
      useSharedValue: jest.fn(() => ({ value: 0 })),
      useDerivedValue: jest.fn((fn) => ({ value: fn() })),
      useAnimatedStyle: jest.fn((fn) => fn()),
      useAnimatedGestureHandler: jest.fn(() => ({})),
      useAnimatedScrollHandler: jest.fn(() => ({})),
      useWorkletCallback: jest.fn((fn) => fn),
      runOnJS: jest.fn((fn) => fn),
      runOnUI: jest.fn((fn) => fn),
      withTiming: jest.fn((value) => value),
      withSpring: jest.fn((value) => value),
      withDecay: jest.fn((value) => value),
      withSequence: jest.fn((...values) => values[values.length - 1]),
      withDelay: jest.fn((_, value) => value),
      withRepeat: jest.fn((value) => value),
      cancelAnimation: jest.fn(),
      measure: jest.fn(),
      Easing: {
        linear: jest.fn(),
        ease: jest.fn(),
        quad: jest.fn(),
        cubic: jest.fn(),
        poly: jest.fn(),
        sin: jest.fn(),
        circle: jest.fn(),
        exp: jest.fn(),
        elastic: jest.fn(),
        back: jest.fn(),
        bounce: jest.fn(),
        bezier: jest.fn(),
        in: jest.fn(),
        out: jest.fn(),
        inOut: jest.fn(),
      },
      Extrapolate: {
        EXTEND: 'extend',
        CLAMP: 'clamp',
        IDENTITY: 'identity',
      },
    },
    View,
    Text: require('react-native').Text,
    Image: require('react-native').Image,
    ScrollView: require('react-native').ScrollView,
    FlatList: require('react-native').FlatList,
    createAnimatedComponent: (Component: any) => Component,
    interpolate: () => 0,
    Easing: {
      linear: jest.fn(),
      ease: jest.fn(),
      quad: jest.fn(),
      cubic: jest.fn(),
    },
    useSharedValue: jest.fn(() => ({ value: 0 })),
    useDerivedValue: jest.fn((fn) => ({ value: fn() })),
    useAnimatedStyle: jest.fn((fn) => fn()),
    withTiming: jest.fn((value) => value),
    withSpring: jest.fn((value) => value),
  };
});

// Mock react-native-vector-icons
jest.mock('react-native-vector-icons/MaterialIcons', () => 'MaterialIcons');
jest.mock('react-native-vector-icons/AntDesign', () => 'AntDesign');
jest.mock('react-native-vector-icons/Feather', () => 'Feather');
jest.mock('react-native-vector-icons/FontAwesome', () => 'FontAwesome');
jest.mock('react-native-vector-icons/Ionicons', () => 'Ionicons');

// Mock expo-font
jest.mock('expo-font', () => ({
  loadAsync: jest.fn(() => Promise.resolve()),
  isLoaded: jest.fn(() => true),
  isLoading: jest.fn(() => false),
}));

// Suppress reanimated warnings during tests
const originalWarn = console.warn;
console.warn = (message, ...args) => {
  if (typeof message === 'string' && message.includes('[Reanimated]')) {
    return;
  }
  originalWarn(message, ...args);
};
