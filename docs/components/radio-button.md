# RadioButton

A single radio button component with smooth animations, label support, and flexible theming. The RadioButton component supports both controlled and uncontrolled states, with built-in animations and accessibility features.

## Import

```tsx
import { ScouterRadioButton } from 'scouter-ui';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onPress` | `(newState: boolean) => void` | - | Callback function when radio button state changes |
| `color` | `ScouterUIThemeColor` | `"blue.500"` | Color of the radio button |
| `isChecked` | `boolean` | `false` | Controlled checked state |
| `label` | `string` | `"radio-button-default"` | Accessibility label for the radio button |
| `disabled` | `boolean` | `false` | Whether the radio button is disabled |
| `size` | `ScouterSizeKey` | `"lg"` | Size of the radio button |
| `radioButtonLabel` | `string` | - | Text label displayed next to radio button |
| `radioButtonLabelColor` | `ScouterUIThemeColor` | - | Color of the label text |
| `radioButtonLabelSize` | `ScouterSizeKey` | - | Font size of the label text |
| `radioButtonLabelWeight` | `ScouterFontWeightKey` | - | Font weight of the label text |

## Basic Usage

### Simple Radio Button
```tsx
import { ScouterRadioButton } from 'scouter-ui';

<ScouterRadioButton 
  onPress={(checked) => console.log('Radio button checked:', checked)}
  radioButtonLabel="Accept terms and conditions"
/>
```

### Controlled Radio Button
```tsx
const [isChecked, setIsChecked] = useState(false);

<ScouterRadioButton 
  isChecked={isChecked}
  onPress={(checked) => setIsChecked(checked)}
  radioButtonLabel="Controlled radio button"
/>
```

## Examples

### Basic Radio Button
```tsx
<ScouterRadioButton 
  onPress={(checked) => setAccepted(checked)}
  radioButtonLabel="I agree to the terms"
/>
```

### Disabled Radio Button
```tsx
<ScouterRadioButton 
  disabled={true}
  onPress={(checked) => console.log('This won\'t fire')}
  radioButtonLabel="Disabled radio button"
/>
```

### Custom Styled Radio Button
```tsx
<ScouterRadioButton 
  color="green.500"
  size="xl"
  radioButtonLabel="Custom styled radio button"
  radioButtonLabelColor="gray.700"
  radioButtonLabelSize="md"
  radioButtonLabelWeight="semibold"
  onPress={(checked) => console.log('Checked:', checked)}
/>
```

### Radio Button with Custom Label
```tsx
<ScouterRadioButton 
  color="purple.500"
  radioButtonLabel="Subscribe to newsletter"
  radioButtonLabelColor="purple.600"
  radioButtonLabelSize="lg"
  radioButtonLabelWeight="bold"
  onPress={(checked) => setNewsletterSubscription(checked)}
/>
```

## Sizes

The radio button supports different sizes:

```tsx
// Extra small
<ScouterRadioButton size="xs" radioButtonLabel="Extra small" />

// Small
<ScouterRadioButton size="sm" radioButtonLabel="Small" />

// Medium
<ScouterRadioButton size="md" radioButtonLabel="Medium" />

// Large (default)
<ScouterRadioButton size="lg" radioButtonLabel="Large" />

// Extra large
<ScouterRadioButton size="xl" radioButtonLabel="Extra large" />

// 2XL
<ScouterRadioButton size="2xl" radioButtonLabel="2XL" />
```

## Colors

The radio button supports all theme colors:

```tsx
// Blue (default)
<ScouterRadioButton color="blue.500" radioButtonLabel="Blue radio button" />

// Green
<ScouterRadioButton color="green.500" radioButtonLabel="Green radio button" />

// Red
<ScouterRadioButton color="red.500" radioButtonLabel="Red radio button" />

// Purple
<ScouterRadioButton color="purple.500" radioButtonLabel="Purple radio button" />

// Orange
<ScouterRadioButton color="orange.500" radioButtonLabel="Orange radio button" />
```

## Advanced Usage

### Form Integration
```tsx
const [formData, setFormData] = useState({
  notifications: '',
  marketing: false,
  terms: false,
});

const handleRadioChange = (field: string, checked: boolean) => {
  setFormData(prev => ({
    ...prev,
    [field]: checked,
  }));
};

<ScouterRadioButton 
  isChecked={formData.notifications === 'email'}
  onPress={(checked) => {
    if (checked) {
      handleRadioChange('notifications', 'email');
    }
  }}
  radioButtonLabel="Receive notifications via email"
  color="blue.500"
/>

<ScouterRadioButton 
  isChecked={formData.notifications === 'sms'}
  onPress={(checked) => {
    if (checked) {
      handleRadioChange('notifications', 'sms');
    }
  }}
  radioButtonLabel="Receive notifications via SMS"
  color="blue.500"
/>

<ScouterRadioButton 
  isChecked={formData.marketing}
  onPress={(checked) => handleRadioChange('marketing', checked)}
  radioButtonLabel="Receive marketing communications"
  color="green.500"
/>

<ScouterRadioButton 
  isChecked={formData.terms}
  onPress={(checked) => handleRadioChange('terms', checked)}
  radioButtonLabel="I accept the terms and conditions"
  color="red.500"
/>
```

### Radio Button Group
```tsx
const [selectedOption, setSelectedOption] = useState('option1');

const options = [
  { id: 'option1', label: 'Option 1', color: 'blue.500' },
  { id: 'option2', label: 'Option 2', color: 'green.500' },
  { id: 'option3', label: 'Option 3', color: 'purple.500' },
];

{options.map((option) => (
  <ScouterRadioButton 
    key={option.id}
    isChecked={selectedOption === option.id}
    onPress={(checked) => {
      if (checked) {
        setSelectedOption(option.id);
      }
    }}
    radioButtonLabel={option.label}
    color={option.color}
  />
))}
```

### Conditional Radio Button
```tsx
const [showAdvanced, setShowAdvanced] = useState(false);

<ScouterRadioButton 
  onPress={(checked) => setShowAdvanced(checked)}
  radioButtonLabel="Show advanced options"
  color="blue.500"
/>

{showAdvanced && (
  <ScouterRadioButton 
    onPress={(checked) => console.log('Advanced option:', checked)}
    radioButtonLabel="Enable advanced features"
    color="orange.500"
  />
)}
```

### Radio Button with Custom Label Styling
```tsx
<ScouterRadioButton 
  onPress={(checked) => console.log('Checked:', checked)}
  radioButtonLabel="Important agreement"
  radioButtonLabelColor="red.600"
  radioButtonLabelSize="lg"
  radioButtonLabelWeight="bold"
  color="red.500"
/>
```

### Radio Button with Validation
```tsx
const [selectedPlan, setSelectedPlan] = useState('');
const [error, setError] = useState('');

const handlePlanSelect = (plan: string) => {
  setSelectedPlan(plan);
  setError('');
};

const validateForm = () => {
  if (!selectedPlan) {
    setError('Please select a plan');
    return false;
  }
  return true;
};

<ScouterRadioButton 
  isChecked={selectedPlan === 'basic'}
  onPress={(checked) => {
    if (checked) handlePlanSelect('basic');
  }}
  radioButtonLabel="Basic Plan - $9/month"
  color={error && !selectedPlan ? 'red.500' : 'blue.500'}
/>

<ScouterRadioButton 
  isChecked={selectedPlan === 'premium'}
  onPress={(checked) => {
    if (checked) handlePlanSelect('premium');
  }}
  radioButtonLabel="Premium Plan - $19/month"
  color={error && !selectedPlan ? 'red.500' : 'blue.500'}
/>

{error && <Text style={{ color: 'red', marginTop: 8 }}>{error}</Text>}
```

## Animations

The RadioButton component includes smooth animations:

- **Selection Animation**: Inner circle scales up with spring animation when selected
- **Button Animation**: Radio button scales down and back up when pressed
- **Smooth Transitions**: All state changes are animated for better UX

## Accessibility

The RadioButton component includes comprehensive accessibility features:

- **ARIA Support**: Proper `aria-checked` attributes
- **Accessibility Label**: Customizable accessibility label
- **Touch Targets**: Adequate touch target size
- **Screen Reader**: Full screen reader compatibility
- **Keyboard Navigation**: Supports keyboard interaction

## Best Practices

1. **Clear Labels**: Use descriptive labels that clearly indicate what the radio button controls
2. **Logical Grouping**: Group related radio buttons together
3. **Consistent Styling**: Use consistent colors and sizes within your app
4. **State Management**: Choose appropriate state management (controlled vs uncontrolled)
5. **Accessibility**: Always provide meaningful labels and test with screen readers

## Form Validation

```tsx
const [errors, setErrors] = useState<string[]>([]);

const validateForm = () => {
  const newErrors = [];
  
  if (!formData.terms) {
    newErrors.push('You must accept the terms and conditions');
  }
  
  setErrors(newErrors);
  return newErrors.length === 0;
};

<ScouterRadioButton 
  isChecked={formData.terms}
  onPress={(checked) => handleRadioChange('terms', checked)}
  radioButtonLabel="I accept the terms and conditions"
  color={errors.includes('You must accept the terms and conditions') ? 'red.500' : 'blue.500'}
/>
```

## Integration Examples

### Settings Form
```tsx
const [settings, setSettings] = useState({
  theme: 'light',
  language: 'en',
  notifications: true,
});

<ScouterRadioButton 
  isChecked={settings.theme === 'light'}
  onPress={(checked) => {
    if (checked) setSettings(prev => ({ ...prev, theme: 'light' }));
  }}
  radioButtonLabel="Light Theme"
  color="blue.500"
/>

<ScouterRadioButton 
  isChecked={settings.theme === 'dark'}
  onPress={(checked) => {
    if (checked) setSettings(prev => ({ ...prev, theme: 'dark' }));
  }}
  radioButtonLabel="Dark Theme"
  color="blue.500"
/>

<ScouterRadioButton 
  isChecked={settings.notifications}
  onPress={(checked) => setSettings(prev => ({ ...prev, notifications: checked }))}
  radioButtonLabel="Enable Notifications"
  color="green.500"
/>
```

### Survey Form
```tsx
const [surveyData, setSurveyData] = useState({
  age: '',
  experience: '',
  satisfaction: '',
});

const ageGroups = ['18-25', '26-35', '36-45', '46+'];
const experienceLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
const satisfactionLevels = ['Very Dissatisfied', 'Dissatisfied', 'Neutral', 'Satisfied', 'Very Satisfied'];

<ScouterHeading size="md" weight="semibold">Age Group</ScouterHeading>
{ageGroups.map((age) => (
  <ScouterRadioButton 
    key={age}
    isChecked={surveyData.age === age}
    onPress={(checked) => {
      if (checked) setSurveyData(prev => ({ ...prev, age }));
    }}
    radioButtonLabel={age}
    color="blue.500"
  />
))}

<ScouterHeading size="md" weight="semibold">Experience Level</ScouterHeading>
{experienceLevels.map((level) => (
  <ScouterRadioButton 
    key={level}
    isChecked={surveyData.experience === level}
    onPress={(checked) => {
      if (checked) setSurveyData(prev => ({ ...prev, experience: level }));
    }}
    radioButtonLabel={level}
    color="green.500"
  />
))}
``` 