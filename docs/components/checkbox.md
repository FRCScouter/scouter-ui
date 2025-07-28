# Checkbox

A customizable checkbox component with smooth animations, label support, and flexible theming. The Checkbox component supports both controlled and uncontrolled states, with built-in animations and accessibility features.

## Import

```tsx
import { ScouterCheckbox } from 'scouter-ui';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onPress` | `(isChecked: boolean) => void` | - | Callback function when checkbox state changes |
| `label` | `string` | `"checkbox-default"` | Accessibility label for the checkbox |
| `color` | `ScouterUIThemeColor` | `"blue.500"` | Color of the checkbox |
| `size` | `ScouterSizeKey` | `"xl"` | Size of the checkbox |
| `variant` | `"outline" \| "flat"` | `"flat"` | Visual style variant |
| `disabled` | `boolean` | `false` | Whether the checkbox is disabled |
| `useBuiltInState` | `boolean` | `true` | Whether to use internal state management |
| `isChecked` | `boolean` | `false` | Controlled checked state |
| `rounded` | `string` | `"5px"` | Border radius of the checkbox |
| `checkboxLabel` | `string` | - | Text label displayed next to checkbox |
| `checkboxLabelColor` | `ScouterUIThemeColor` | - | Color of the label text |
| `checkboxLabelFontWeight` | `ScouterFontWeightKey` | - | Font weight of the label text |
| `checkboxLabelSize` | `ScouterSizeKey` | - | Font size of the label text |

## Variants

### Flat Variant (Default)
```tsx
<ScouterCheckbox 
  onPress={(checked) => console.log('Checked:', checked)}
  checkboxLabel="Accept terms and conditions"
/>
```

### Outline Variant
```tsx
<ScouterCheckbox 
  variant="outline"
  onPress={(checked) => console.log('Checked:', checked)}
  checkboxLabel="Subscribe to newsletter"
/>
```

## Examples

### Basic Checkbox
```tsx
<ScouterCheckbox 
  onPress={(checked) => setAccepted(checked)}
  checkboxLabel="I agree to the terms"
/>
```

### Controlled Checkbox
```tsx
const [isChecked, setIsChecked] = useState(false);

<ScouterCheckbox 
  isChecked={isChecked}
  useBuiltInState={false}
  onPress={(checked) => setIsChecked(checked)}
  checkboxLabel="Controlled checkbox"
/>
```

### Disabled Checkbox
```tsx
<ScouterCheckbox 
  disabled={true}
  onPress={(checked) => console.log('This won\'t fire')}
  checkboxLabel="Disabled checkbox"
/>
```

### Custom Styled Checkbox
```tsx
<ScouterCheckbox 
  color="green.500"
  size="lg"
  variant="outline"
  checkboxLabel="Custom styled checkbox"
  checkboxLabelColor="gray.700"
  checkboxLabelSize="md"
  checkboxLabelFontWeight="semibold"
  onPress={(checked) => console.log('Checked:', checked)}
/>
```

### Checkbox with Custom Border Radius
```tsx
<ScouterCheckbox 
  rounded="12px"
  onPress={(checked) => console.log('Checked:', checked)}
  checkboxLabel="Rounded checkbox"
/>
```

## Sizes

The checkbox supports different sizes:

```tsx
// Extra small
<ScouterCheckbox size="xs" checkboxLabel="Extra small" />

// Small
<ScouterCheckbox size="sm" checkboxLabel="Small" />

// Medium
<ScouterCheckbox size="md" checkboxLabel="Medium" />

// Large
<ScouterCheckbox size="lg" checkboxLabel="Large" />

// Extra large (default)
<ScouterCheckbox size="xl" checkboxLabel="Extra large" />

// 2XL
<ScouterCheckbox size="2xl" checkboxLabel="2XL" />
```

## Colors

The checkbox supports all theme colors:

```tsx
// Blue (default)
<ScouterCheckbox color="blue.500" checkboxLabel="Blue checkbox" />

// Green
<ScouterCheckbox color="green.500" checkboxLabel="Green checkbox" />

// Red
<ScouterCheckbox color="red.500" checkboxLabel="Red checkbox" />

// Purple
<ScouterCheckbox color="purple.500" checkboxLabel="Purple checkbox" />

// Orange
<ScouterCheckbox color="orange.500" checkboxLabel="Orange checkbox" />
```

## State Management

### Uncontrolled (Default)
```tsx
<ScouterCheckbox 
  onPress={(checked) => console.log('State changed to:', checked)}
  checkboxLabel="Uncontrolled checkbox"
/>
```

### Controlled
```tsx
const [isChecked, setIsChecked] = useState(false);

<ScouterCheckbox 
  isChecked={isChecked}
  useBuiltInState={false}
  onPress={(checked) => setIsChecked(checked)}
  checkboxLabel="Controlled checkbox"
/>
```

## Advanced Usage

### Form Integration
```tsx
const [formData, setFormData] = useState({
  acceptTerms: false,
  subscribeNewsletter: false,
  shareData: false,
});

const handleCheckboxChange = (field: string, checked: boolean) => {
  setFormData(prev => ({
    ...prev,
    [field]: checked,
  }));
};

<ScouterCheckbox 
  isChecked={formData.acceptTerms}
  useBuiltInState={false}
  onPress={(checked) => handleCheckboxChange('acceptTerms', checked)}
  checkboxLabel="I accept the terms and conditions"
  color="blue.500"
/>

<ScouterCheckbox 
  isChecked={formData.subscribeNewsletter}
  useBuiltInState={false}
  onPress={(checked) => handleCheckboxChange('subscribeNewsletter', checked)}
  checkboxLabel="Subscribe to our newsletter"
  color="green.500"
/>

<ScouterCheckbox 
  isChecked={formData.shareData}
  useBuiltInState={false}
  onPress={(checked) => handleCheckboxChange('shareData', checked)}
  checkboxLabel="Allow data sharing with partners"
  color="purple.500"
/>
```

### Conditional Checkbox
```tsx
const [showAdvanced, setShowAdvanced] = useState(false);

<ScouterCheckbox 
  onPress={(checked) => setShowAdvanced(checked)}
  checkboxLabel="Show advanced options"
  color="blue.500"
/>

{showAdvanced && (
  <ScouterCheckbox 
    onPress={(checked) => console.log('Advanced option:', checked)}
    checkboxLabel="Enable advanced features"
    color="orange.500"
  />
)}
```

### Checkbox with Custom Label Styling
```tsx
<ScouterCheckbox 
  onPress={(checked) => console.log('Checked:', checked)}
  checkboxLabel="Important agreement"
  checkboxLabelColor="red.600"
  checkboxLabelSize="lg"
  checkboxLabelFontWeight="bold"
  color="red.500"
/>
```

## Animations

The Checkbox component includes smooth animations:

- **Check Animation**: Icon scales up with spring animation when checked
- **Box Animation**: Checkbox scales down and back up when pressed
- **Smooth Transitions**: All state changes are animated for better UX

## Accessibility

The Checkbox component includes comprehensive accessibility features:

- **ARIA Support**: Proper `aria-checked` attributes
- **Accessibility Label**: Customizable accessibility label
- **Touch Targets**: Adequate touch target size
- **Screen Reader**: Full screen reader compatibility
- **Keyboard Navigation**: Supports keyboard interaction

## Best Practices

1. **Clear Labels**: Use descriptive labels that clearly indicate what the checkbox controls
2. **Logical Grouping**: Group related checkboxes together
3. **Consistent Styling**: Use consistent colors and sizes within your app
4. **State Management**: Choose appropriate state management (controlled vs uncontrolled)
5. **Accessibility**: Always provide meaningful labels and test with screen readers

## Form Validation

```tsx
const [errors, setErrors] = useState<string[]>([]);

const validateForm = () => {
  const newErrors = [];
  
  if (!formData.acceptTerms) {
    newErrors.push('You must accept the terms and conditions');
  }
  
  setErrors(newErrors);
  return newErrors.length === 0;
};

<ScouterCheckbox 
  isChecked={formData.acceptTerms}
  useBuiltInState={false}
  onPress={(checked) => handleCheckboxChange('acceptTerms', checked)}
  checkboxLabel="I accept the terms and conditions"
  color={errors.includes('You must accept the terms and conditions') ? 'red.500' : 'blue.500'}
/>
``` 