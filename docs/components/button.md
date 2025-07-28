# Button

A versatile button component with support for solid and outline variants, icons, animations, and comprehensive theming. The Button component includes smooth press animations and supports all standard React Native Pressable props.

## Import

```tsx
import { ScouterButton } from 'scouter-ui';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | The button content (text) |
| `onPress` | `() => void` | - | Press handler function |
| `color` | `ScouterUIThemeColor` | `"blue.500"` | The button color (supports theme colors) |
| `variant` | `"solid" \| "outline"` | `"solid"` | Button style variant |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `Icon` | `React.ReactElement` | - | Optional icon element to display |
| `buttonLabelColor` | `ScouterUIThemeColor` | - | Color for the button text |
| `buttonLabelSize` | `ScouterSizeKey` | - | Size for the button text |
| `buttonLabelWeight` | `ScouterFontWeightKey` | - | Font weight for the button text |
| `style` | `StyleProp<ViewStyle>` | - | Additional styles to apply |

### Inherited Props

The Button component extends React Native's `PressableProps`, so you can use all standard pressable props like `onPressIn`, `onPressOut`, `onLongPress`, etc.

## Variants

### Solid Button (Default)
```tsx
<ScouterButton onPress={() => console.log('Pressed!')}>
  Click Me
</ScouterButton>
```

### Outline Button
```tsx
<ScouterButton 
  variant="outline" 
  onPress={() => console.log('Pressed!')}
>
  Outline Button
</ScouterButton>
```

## Colors

The Button component supports all theme colors:

```tsx
// Blue (default)
<ScouterButton color="blue.500">Blue Button</ScouterButton>

// Green
<ScouterButton color="green.500">Green Button</ScouterButton>

// Red
<ScouterButton color="red.500">Red Button</ScouterButton>

// Purple
<ScouterButton color="purple.500">Purple Button</ScouterButton>
```

## Examples

### Basic Button
```tsx
<ScouterButton onPress={() => alert('Hello!')}>
  Click Me
</ScouterButton>
```

### Button with Icon
```tsx
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';

<ScouterButton 
  onPress={() => console.log('Save pressed')}
  Icon={<MaterialIcons name="save" size={20} color="white" />}
>
  Save
</ScouterButton>
```

### Disabled Button
```tsx
<ScouterButton 
  onPress={() => console.log('This won\'t fire')}
  disabled={true}
>
  Disabled Button
</ScouterButton>
```

### Custom Styled Button
```tsx
<ScouterButton
  onPress={() => console.log('Custom button')}
  color="purple.500"
  variant="outline"
  buttonLabelSize="lg"
  buttonLabelWeight="bold"
  style={{ marginTop: 20 }}
>
  Custom Button
</ScouterButton>
```

### Button with Long Press
```tsx
<ScouterButton
  onPress={() => console.log('Pressed')}
  onLongPress={() => console.log('Long pressed')}
  onPressIn={() => console.log('Press in')}
  onPressOut={() => console.log('Press out')}
>
  Interactive Button
</ScouterButton>
```

## Button Sizes

You can customize the button text size using the `buttonLabelSize` prop:

```tsx
// Small text
<ScouterButton buttonLabelSize="sm">Small Button</ScouterButton>

// Medium text (default)
<ScouterButton buttonLabelSize="md">Medium Button</ScouterButton>

// Large text
<ScouterButton buttonLabelSize="lg">Large Button</ScouterButton>

// Extra large text
<ScouterButton buttonLabelSize="xl">Extra Large Button</ScouterButton>
```

## Button Weights

Customize the font weight of the button text:

```tsx
// Light weight
<ScouterButton buttonLabelWeight="light">Light Button</ScouterButton>

// Normal weight (default)
<ScouterButton buttonLabelWeight="normal">Normal Button</ScouterButton>

// Bold weight
<ScouterButton buttonLabelWeight="bold">Bold Button</ScouterButton>
```

## Animations

The Button component includes smooth press animations:

- **Scale Animation**: Button scales down to 90% when pressed
- **Spring Animation**: Uses React Native Reanimated for smooth transitions
- **Accessibility**: Maintains proper touch feedback for accessibility

## Accessibility

The Button component includes built-in accessibility features:

- Proper touch targets (minimum 44x44 points)
- Touch feedback animations
- Support for accessibility props from Pressable
- Screen reader compatibility

## Best Practices

1. **Clear Labels**: Use descriptive button text that clearly indicates the action
2. **Consistent Colors**: Use consistent color schemes throughout your app
3. **Icon Usage**: Use icons to enhance button meaning, not replace text
4. **Disabled States**: Provide clear visual feedback for disabled buttons
5. **Touch Targets**: Ensure buttons are large enough for comfortable tapping

## Advanced Usage

### Custom Button with All Props
```tsx
<ScouterButton
  onPress={() => handleSubmit()}
  color="green.500"
  variant="solid"
  disabled={isLoading}
  Icon={<ActivityIndicator size="small" color="white" />}
  buttonLabelColor="white.50"
  buttonLabelSize="lg"
  buttonLabelWeight="semibold"
  style={{
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
  }}
>
  {isLoading ? 'Submitting...' : 'Submit Form'}
</ScouterButton>
```

### Button with Custom Press Handlers
```tsx
<ScouterButton
  onPress={() => console.log('Pressed')}
  onPressIn={() => console.log('Press started')}
  onPressOut={() => console.log('Press ended')}
  onLongPress={() => console.log('Long press')}
  delayLongPress={1000}
>
  Custom Press Handlers
</ScouterButton>
``` 