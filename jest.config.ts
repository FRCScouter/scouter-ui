import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',

  // Required for Expo projects
  preset: 'jest-expo',

  // Make Jest transform ESM packages from node_modules
  transformIgnorePatterns: [
    'node_modules/(?!(expo(nent)?|@expo(nent)?/.*|expo-modules-core|react-native|@react-native/.*|react-native-worklets|react-native-reanimated|@react-native-community/.*|react-native-vector-icons|expo-font|@expo/vector-icons)/)',
  ],

  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',

  // Ignore native reanimated files and build directory
  testPathIgnorePatterns: [
    '/node_modules/',
    '/android/',
    '/ios/',
    '/build/',
  ],

  // Exclude build directory from coverage
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/build/',
  ],
};

export default config;
