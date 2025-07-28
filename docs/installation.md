# Installation

Get started with ScouterUI by following these installation steps.

## Prerequisites

Before installing ScouterUI, make sure you have:

- **React Native** project set up
- **Expo** development environment (recommended)
- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager

## Installation Steps

### 1. Install the Package

Using npm:
```bash
npm install scouter-ui
```

Using yarn:
```bash
yarn add scouter-ui
```

### 2. Install Dependencies

ScouterUI requires the following peer dependencies:

```bash
npm install @emotion/native @emotion/react react-native-reanimated react-native-vector-icons
```

Or with yarn:
```bash
yarn add @emotion/native @emotion/react react-native-reanimated react-native-vector-icons
```

### 3. Configure React Native Reanimated

Add the Reanimated plugin to your `babel.config.js`:

```javascript
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    'react-native-reanimated/plugin',
  ],
};
```

### 4. Configure Vector Icons

For Expo projects, vector icons are included by default.

For bare React Native projects, follow the [react-native-vector-icons installation guide](https://github.com/oblador/react-native-vector-icons#installation).

### 5. Wrap Your App

Import and wrap your app with the `ScouterUIProvider`:

```tsx
import React from 'react';
import { ScouterUIProvider } from 'scouter-ui';

export default function App() {
  return (
    <ScouterUIProvider>
      {/* Your app content */}
    </ScouterUIProvider>
  );
}
```

## Expo Setup

If you're using Expo, the setup is straightforward:

### 1. Create a new Expo project (if needed)

```bash
npx create-expo-app MyApp
cd MyApp
```

### 2. Install ScouterUI

```bash
npx expo install scouter-ui @emotion/native @emotion/react react-native-reanimated react-native-vector-icons
```

### 3. Update babel.config.js

```javascript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
    ],
  };
};
```

### 4. Start your app

```bash
npx expo start
```

## Bare React Native Setup

For bare React Native projects, additional configuration may be required:

### 1. Install dependencies

```bash
npm install scouter-ui @emotion/native @emotion/react react-native-reanimated react-native-vector-icons
```

### 2. Link native dependencies

```bash
npx react-native link react-native-vector-icons
```

### 3. Configure iOS (if applicable)

Add the following to your `ios/Podfile`:

```ruby
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
```

Then run:
```bash
cd ios && pod install
```

### 4. Configure Android (if applicable)

Add the following to your `android/app/build.gradle`:

```gradle
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```

## TypeScript Support

ScouterUI is built with TypeScript and includes full type definitions. If you're using TypeScript, no additional configuration is needed.

## Verification

To verify your installation, try importing and using a component:

```tsx
import React from 'react';
import { View } from 'react-native';
import { ScouterUIProvider, ScouterButton } from 'scouter-ui';

export default function App() {
  return (
    <ScouterUIProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ScouterButton onPress={() => alert('Hello from ScouterUI!')}>
          Click Me
        </ScouterButton>
      </View>
    </ScouterUIProvider>
  );
}
```

## Troubleshooting

### Common Issues

#### 1. Metro bundler cache issues

Clear the Metro cache:
```bash
npx react-native start --reset-cache
```

#### 2. Reanimated not working

Make sure the Reanimated plugin is added to your babel config and restart the bundler.

#### 3. Vector icons not showing

For bare React Native projects, ensure you've properly linked the vector icons library.

#### 4. Emotion styling issues

Make sure you have both `@emotion/native` and `@emotion/react` installed.

### Getting Help

If you encounter any issues:

1. Check the [troubleshooting guide](#troubleshooting)
2. Review the [component documentation](/components/)
3. Open an issue on the GitHub repository

## Next Steps

Now that you have ScouterUI installed, you can:

- Explore the [components documentation](/components/)
- Check out the [examples and usage patterns](/components/)
- Start building your app with ScouterUI components 