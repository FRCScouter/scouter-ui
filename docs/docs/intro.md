---
sidebar_position: 1
title: Getting Started
---

# Getting Started

Welcome to ScouterUI! Before you start using the components, there is one important step you need to take to ensure everything works correctly.

## ScouterUIProvider

All ScouterUI components must be wrapped within the `<ScouterUIProvider>`. This provider sets up the necessary theme and context that the components rely on. You should wrap your application's root component with it.

### Usage

Here is an example of how to set up `ScouterUIProvider` in your main application file (e.g., `App.js` or `App.tsx`):

```jsx
import { ScouterUIProvider } from 'scouter-ui';
// Import your components and other parts of your app
import MyAwesomeApp from './src/MyAwesomeApp';

function App() {
  return (
    <ScouterUIProvider>
      <MyAwesomeApp />
    </ScouterUIProvider>
  );
}

export default App;
```

By doing this, all ScouterUI components used within `MyAwesomeApp` will have access to the theme and will render correctly.

Now you're ready to explore and use the individual components! 