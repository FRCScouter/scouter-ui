# Counter

A numeric stepper component with increment/decrement buttons and optional ref access for imperative value retrieval. The Counter component includes smooth animations and supports all Stack component props for flexible layout.

## Import

```tsx
import { ScouterCounter } from 'scouter-ui';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onChange` | `(newValue: number) => void` | - | Callback function when value changes |
| `valueRef` | `Ref<{ getValue: () => number }>` | - | Ref for imperative handle to get current value |
| `color` | `ScouterUIThemeColor` | - | Color of the increment/decrement buttons |
| `initialValue` | `number` | `0` | Initial value of the counter |
| `direction` | `"row" \| "column"` | `"row"` | Direction to arrange the counter elements |
| `gap` | `ScouterSizeKey` | `"sm"` | Gap between counter elements |
| `style` | `ViewStyle \| ViewStyle[]` | - | Additional styles to apply |

### Inherited Props

The Counter component extends `StackProps`, so you can use all Stack component props like `direction`, `gap`, `style`, etc.

## Basic Usage

### Simple Counter
```tsx
import { ScouterCounter } from 'scouter-ui';

<ScouterCounter 
  onChange={(value) => console.log('Counter value:', value)}
/>
```

### Counter with Initial Value
```tsx
<ScouterCounter 
  initialValue={5}
  onChange={(value) => setQuantity(value)}
/>
```

## Examples

### Basic Counter
```tsx
const [count, setCount] = useState(0);

<ScouterCounter 
  initialValue={count}
  onChange={(value) => setCount(value)}
/>
```

### Counter with Custom Color
```tsx
<ScouterCounter 
  color="green.500"
  onChange={(value) => console.log('Value:', value)}
/>
```

### Counter with Ref Access
```tsx
import { useRef } from 'react';

const counterRef = useRef<{ getValue: () => number }>(null);

<ScouterCounter 
  valueRef={counterRef}
  onChange={(value) => console.log('Value changed:', value)}
/>

// Later, get the current value
const currentValue = counterRef.current?.getValue();
```

### Vertical Counter
```tsx
<ScouterCounter 
  direction="column"
  onChange={(value) => console.log('Value:', value)}
/>
```

### Custom Styled Counter
```tsx
<ScouterCounter 
  color="purple.500"
  gap="md"
  style={{ 
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
  }}
  onChange={(value) => console.log('Value:', value)}
/>
```

## Advanced Usage

### Form Integration
```tsx
const [formData, setFormData] = useState({
  quantity: 1,
  price: 10.99,
});

const handleQuantityChange = (quantity: number) => {
  setFormData(prev => ({
    ...prev,
    quantity,
  }));
};

<ScouterCounter 
  initialValue={formData.quantity}
  onChange={handleQuantityChange}
  color="blue.500"
/>

<Text>Total: ${(formData.quantity * formData.price).toFixed(2)}</Text>
```

### Counter with Validation
```tsx
const [quantity, setQuantity] = useState(1);
const [error, setError] = useState('');

const handleQuantityChange = (value: number) => {
  if (value > 10) {
    setError('Maximum quantity is 10');
    return;
  }
  if (value < 1) {
    setError('Minimum quantity is 1');
    return;
  }
  
  setError('');
  setQuantity(value);
};

<ScouterCounter 
  initialValue={quantity}
  onChange={handleQuantityChange}
  color={error ? 'red.500' : 'blue.500'}
/>

{error && <Text style={{ color: 'red' }}>{error}</Text>}
```

### Counter with Custom Range
```tsx
const [value, setValue] = useState(0);

const handleChange = (newValue: number) => {
  // Clamp value between 0 and 100
  const clampedValue = Math.max(0, Math.min(100, newValue));
  setValue(clampedValue);
};

<ScouterCounter 
  initialValue={value}
  onChange={handleChange}
  color="orange.500"
/>

<Text>Value: {value}/100</Text>
```

### Multiple Counters
```tsx
const [counters, setCounters] = useState({
  adults: 1,
  children: 0,
  seniors: 0,
});

const handleCounterChange = (field: string, value: number) => {
  setCounters(prev => ({
    ...prev,
    [field]: value,
  }));
};

<ScouterCounter 
  initialValue={counters.adults}
  onChange={(value) => handleCounterChange('adults', value)}
  color="blue.500"
/>

<ScouterCounter 
  initialValue={counters.children}
  onChange={(value) => handleCounterChange('children', value)}
  color="green.500"
/>

<ScouterCounter 
  initialValue={counters.seniors}
  onChange={(value) => handleCounterChange('seniors', value)}
  color="purple.500"
/>
```

## Imperative API

The Counter component provides an imperative API through the `valueRef` prop:

```tsx
import { useRef } from 'react';

const counterRef = useRef<{ getValue: () => number }>(null);

// Get current value
const getCurrentValue = () => {
  const value = counterRef.current?.getValue();
  console.log('Current value:', value);
  return value;
};

<ScouterCounter 
  valueRef={counterRef}
  onChange={(value) => console.log('Value changed:', value)}
/>

<Button onPress={getCurrentValue}>
  Get Current Value
</Button>
```

## Layout Options

### Horizontal Layout (Default)
```tsx
<ScouterCounter 
  direction="row"
  onChange={(value) => console.log('Value:', value)}
/>
```

### Vertical Layout
```tsx
<ScouterCounter 
  direction="column"
  onChange={(value) => console.log('Value:', value)}
/>
```

### Custom Gap
```tsx
<ScouterCounter 
  gap="lg"
  onChange={(value) => console.log('Value:', value)}
/>
```

## Colors

The Counter component supports all theme colors for the buttons:

```tsx
// Blue
<ScouterCounter color="blue.500" />

// Green
<ScouterCounter color="green.500" />

// Red
<ScouterCounter color="red.500" />

// Purple
<ScouterCounter color="purple.500" />

// Orange
<ScouterCounter color="orange.500" />
```

## Animations

The Counter component includes smooth animations:

- **Button Animations**: Scale animations on button press
- **Value Transitions**: Smooth value display updates
- **Spring Animations**: Uses React Native Reanimated for smooth transitions

## Accessibility

The Counter component includes comprehensive accessibility features:

- **Touch Targets**: Adequate touch target sizes for buttons
- **Screen Reader**: Proper accessibility labels
- **Keyboard Navigation**: Supports keyboard interaction
- **Value Announcement**: Screen readers announce value changes

## Best Practices

1. **Clear Purpose**: Use descriptive labels or context to indicate what the counter represents
2. **Appropriate Ranges**: Set reasonable min/max values for your use case
3. **Visual Feedback**: Use colors and styling to indicate state
4. **Validation**: Implement validation for business logic constraints
5. **Accessibility**: Ensure the counter is accessible to all users

## Integration Examples

### Shopping Cart Quantity
```tsx
const [quantity, setQuantity] = useState(1);
const [price, setPrice] = useState(29.99);

<ScouterCounter 
  initialValue={quantity}
  onChange={setQuantity}
  color="blue.500"
/>

<Text>Quantity: {quantity}</Text>
<Text>Total: ${(quantity * price).toFixed(2)}</Text>
```

### Timer Setup
```tsx
const [minutes, setMinutes] = useState(5);
const [seconds, setSeconds] = useState(0);

<ScouterCounter 
  initialValue={minutes}
  onChange={setMinutes}
  color="green.500"
/>

<ScouterCounter 
  initialValue={seconds}
  onChange={setSeconds}
  color="blue.500"
/>

<Text>Timer: {minutes}:{seconds.toString().padStart(2, '0')}</Text>
```

### Rating System
```tsx
const [rating, setRating] = useState(3);

<ScouterCounter 
  initialValue={rating}
  onChange={setRating}
  color="yellow.500"
/>

<Text>Rating: {rating}/5</Text>
``` 