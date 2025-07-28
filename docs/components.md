# Components

ScouterUI provides a comprehensive set of React Native components designed for building modern, accessible, and themeable mobile applications. All components are built with TypeScript and follow consistent design patterns.

## Quick Start

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

## Basic Examples

### Simple Form
```tsx
import { ScouterStack, ScouterTextField, ScouterButton } from 'scouter-ui';

function MyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <ScouterStack direction="column" gap="lg">
      <ScouterTextField 
        label="Name"
        value={name}
        onTextChange={setName}
      />
      <ScouterTextField 
        label="Email"
        value={email}
        onTextChange={setEmail}
      />
      <ScouterButton onPress={() => console.log('Submit')}>
        Submit
      </ScouterButton>
    </ScouterStack>
  );
}
```

### Interactive Elements
```tsx
import { ScouterCheckbox, ScouterRadioButton, ScouterCounter } from 'scouter-ui';

function InteractiveDemo() {
  return (
    <ScouterStack direction="column" gap="md">
      <ScouterCheckbox 
        checkboxLabel="Accept terms"
        onPress={(checked) => console.log('Checked:', checked)}
      />
      <ScouterRadioButton 
        radioButtonLabel="Option A"
        onPress={(checked) => console.log('Selected:', checked)}
      />
      <ScouterCounter 
        onChange={(value) => console.log('Count:', value)}
      />
    </ScouterStack>
  );
}
```

## TypeScript Support

All components are fully typed with TypeScript, providing excellent IntelliSense support and compile-time error checking.

## Accessibility

Every component includes built-in accessibility features:

- **Screen Reader Support**: Proper ARIA labels and announcements
- **Keyboard Navigation**: Full keyboard accessibility
- **Touch Targets**: Adequate touch target sizes
- **Color Contrast**: High contrast color combinations
- **Focus Management**: Proper focus handling

## Theming

Components automatically adapt to your theme through the `ScouterUIProvider`:

```tsx
import { ScouterUIProvider } from 'scouter-ui';

function App() {
  return (
    <ScouterUIProvider>
      {/* All components will use the theme colors */}
    </ScouterUIProvider>
  );
}
```

## Performance

All components are optimized for performance:

- **Memoization**: Components use React.memo where appropriate
- **Efficient Re-renders**: Minimal re-renders through optimized state management
- **Bundle Size**: Tree-shakeable imports to reduce bundle size
- **Animations**: Hardware-accelerated animations using Reanimated

## Best Practices

1. **Consistent Usage**: Use components consistently throughout your app
2. **Accessibility**: Always provide proper labels and test with screen readers
3. **Performance**: Avoid unnecessary re-renders by memoizing callbacks
4. **Theming**: Use theme colors instead of hardcoded values
5. **Error Handling**: Implement proper error states and validation

## Getting Help

- Check individual component documentation for detailed usage
- Review the [installation guide](/installation) for setup instructions
- Explore the [examples](/components/) for common patterns