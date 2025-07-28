# Components Overview

ScouterUI provides a comprehensive set of React Native components designed for building modern, accessible, and themeable mobile applications. All components are built with TypeScript and follow consistent design patterns.

## Component Categories

### Form Components
- **[TextField](/components/text-field)** - Text input with label, error, and helper text support
- **[Checkbox](/components/checkbox)** - Customizable checkbox with animations
- **[RadioButton](/components/radio-button)** - Single radio button with label
- **[Dropdown](/components/dropdown)** - Modal dropdown for selecting from options

### Action Components
- **[Button](/components/button)** - Versatile button with solid and outline variants
- **[ButtonGroup](/components/button-group)** - Group multiple buttons together
- **[Counter](/components/counter)** - Numeric stepper with increment/decrement

### Layout Components
- **[Stack](/components/stack)** - Flexbox-based layout component for spacing and alignment
- **[Heading](/components/heading)** - Styled text component for titles and headers

### Feedback Components
- **[Alert](/components/alert)** - Dismissible message bar for notifications

## Getting Started

::: warning
Your app must be wrapped in `<ScouterUIProvider>` to use any components.
:::

```tsx
import { ScouterUIProvider } from 'scouter-ui';

function App() {
  return (
    <ScouterUIProvider>
      {/* Your app content */}
    </ScouterUIProvider>
  );
}
```

## Design System

All components follow a consistent design system with:

- **Themeable Colors**: All components support theme colors through the `ScouterUIThemeColor` type
- **Consistent Sizing**: Uses predefined size tokens (`xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `4xl`, `5xl`, `6xl`)
- **Typography Scale**: Font weights (`light`, `normal`, `medium`, `semibold`, `bold`, `extrabold`, `black`)
- **Accessibility**: Built-in accessibility features and ARIA support
- **Animations**: Smooth animations using React Native Reanimated

## Importing Components

```tsx
// Import individual components
import { ScouterButton, ScouterTextField, ScouterAlert } from 'scouter-ui';

// Or import all components
import * as ScouterUI from 'scouter-ui';
```

## TypeScript Support

All components are fully typed with TypeScript, providing excellent IntelliSense support and compile-time error checking. 