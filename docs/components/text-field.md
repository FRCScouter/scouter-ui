# TextField

A styled text input component with label, error, and helper text support. The TextField component includes built-in validation states, accessibility features, and follows the design system's styling patterns.

## Import

```tsx
import { ScouterTextField } from 'scouter-ui';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text displayed above the input |
| `labelSize` | `"sm" \| "md" \| "lg"` | `"md"` | Size of the label text |
| `required` | `boolean` | `false` | Whether the field is required (shows asterisk) |
| `placeholder` | `string` | `""` | Placeholder text for the input |
| `onTextChange` | `(value: string \| number) => void` | - | Callback when text changes |
| `value` | `string \| number` | `""` | Current value of the input |
| `helper` | `string` | - | Helper text displayed below the input |
| `error` | `string` | - | Error message displayed below the input |
| `disabled` | `boolean` | `false` | Whether the input is disabled |

## Basic Usage

### Simple Text Field
```tsx
import { ScouterTextField } from 'scouter-ui';

<ScouterTextField 
  label="Name"
  placeholder="Enter your name"
  value={name}
  onTextChange={setName}
/>
```

### Required Field
```tsx
<ScouterTextField 
  label="Email"
  placeholder="Enter your email"
  required={true}
  value={email}
  onTextChange={setEmail}
/>
```

## Examples

### Basic Text Field
```tsx
const [name, setName] = useState('');

<ScouterTextField 
  label="Full Name"
  placeholder="Enter your full name"
  value={name}
  onTextChange={setName}
/>
```

### Email Field with Validation
```tsx
const [email, setEmail] = useState('');
const [emailError, setEmailError] = useState('');

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    setEmailError('Email is required');
  } else if (!emailRegex.test(email)) {
    setEmailError('Please enter a valid email address');
  } else {
    setEmailError('');
  }
};

<ScouterTextField 
  label="Email Address"
  placeholder="Enter your email"
  required={true}
  value={email}
  onTextChange={(value) => {
    setEmail(value as string);
    validateEmail(value as string);
  }}
  error={emailError}
  helper="We'll never share your email with anyone else"
/>
```

### Password Field
```tsx
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);

<ScouterTextField 
  label="Password"
  placeholder="Enter your password"
  required={true}
  value={password}
  onTextChange={setPassword}
  helper="Password must be at least 8 characters long"
/>
```

### Disabled Field
```tsx
<ScouterTextField 
  label="Username"
  placeholder="Username"
  value="john_doe"
  onTextChange={() => {}}
  disabled={true}
  helper="Username cannot be changed"
/>
```

### Custom Label Size
```tsx
<ScouterTextField 
  label="Large Label"
  labelSize="lg"
  placeholder="Enter text"
  value={text}
  onTextChange={setText}
/>
```

## Form Integration

### Complete Form
```tsx
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
});

const [errors, setErrors] = useState<Record<string, string>>({});

const handleFieldChange = (field: string, value: string) => {
  setFormData(prev => ({ ...prev, [field]: value }));
  
  // Clear error when user starts typing
  if (errors[field]) {
    setErrors(prev => ({ ...prev, [field]: '' }));
  }
};

const validateForm = () => {
  const newErrors: Record<string, string> = {};
  
  if (!formData.firstName) {
    newErrors.firstName = 'First name is required';
  }
  
  if (!formData.lastName) {
    newErrors.lastName = 'Last name is required';
  }
  
  if (!formData.email) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Please enter a valid email';
  }
  
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

<ScouterStack direction="column" gap="lg">
  <ScouterTextField 
    label="First Name"
    placeholder="Enter your first name"
    required={true}
    value={formData.firstName}
    onTextChange={(value) => handleFieldChange('firstName', value as string)}
    error={errors.firstName}
  />
  
  <ScouterTextField 
    label="Last Name"
    placeholder="Enter your last name"
    required={true}
    value={formData.lastName}
    onTextChange={(value) => handleFieldChange('lastName', value as string)}
    error={errors.lastName}
  />
  
  <ScouterTextField 
    label="Email Address"
    placeholder="Enter your email"
    required={true}
    value={formData.email}
    onTextChange={(value) => handleFieldChange('email', value as string)}
    error={errors.email}
    helper="We'll use this to send you important updates"
  />
  
  <ScouterTextField 
    label="Phone Number"
    placeholder="Enter your phone number"
    value={formData.phone}
    onTextChange={(value) => handleFieldChange('phone', value as string)}
    helper="Optional - for account recovery"
  />
  
  <ScouterButton onPress={validateForm}>
    Submit Form
  </ScouterButton>
</ScouterStack>
```

## Advanced Usage

### Conditional Validation
```tsx
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [passwordError, setPasswordError] = useState('');

const validatePasswords = () => {
  if (password && confirmPassword && password !== confirmPassword) {
    setPasswordError('Passwords do not match');
  } else {
    setPasswordError('');
  }
};

<ScouterTextField 
  label="Password"
  placeholder="Enter your password"
  required={true}
  value={password}
  onTextChange={(value) => {
    setPassword(value as string);
    validatePasswords();
  }}
  helper="Password must be at least 8 characters"
/>

<ScouterTextField 
  label="Confirm Password"
  placeholder="Confirm your password"
  required={true}
  value={confirmPassword}
  onTextChange={(value) => {
    setConfirmPassword(value as string);
    validatePasswords();
  }}
  error={passwordError}
/>
```

### Real-time Validation
```tsx
const [username, setUsername] = useState('');
const [usernameError, setUsernameError] = useState('');
const [isChecking, setIsChecking] = useState(false);

const checkUsername = async (username: string) => {
  if (username.length < 3) {
    setUsernameError('Username must be at least 3 characters');
    return;
  }
  
  setIsChecking(true);
  
  // Simulate API call
  setTimeout(() => {
    const isAvailable = username !== 'admin';
    setUsernameError(isAvailable ? '' : 'Username is already taken');
    setIsChecking(false);
  }, 500);
};

<ScouterTextField 
  label="Username"
  placeholder="Choose a username"
  required={true}
  value={username}
  onTextChange={(value) => {
    setUsername(value as string);
    checkUsername(value as string);
  }}
  error={usernameError}
  helper={isChecking ? 'Checking availability...' : 'Username must be unique'}
/>
```

### Custom Styling
```tsx
<ScouterTextField 
  label="Custom Styled Field"
  placeholder="Enter text"
  value={text}
  onTextChange={setText}
  style={{
    backgroundColor: '#f8f9fa',
    borderColor: '#007bff',
    borderRadius: 8,
  }}
/>
```

### Numeric Input
```tsx
const [age, setAge] = useState('');

<ScouterTextField 
  label="Age"
  placeholder="Enter your age"
  value={age}
  onTextChange={(value) => {
    // Only allow numeric input
    const numericValue = (value as string).replace(/[^0-9]/g, '');
    setAge(numericValue);
  }}
  helper="Must be a number"
/>
```

## Validation Patterns

### Email Validation
```tsx
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

<ScouterTextField 
  label="Email"
  placeholder="Enter your email"
  value={email}
  onTextChange={(value) => {
    setEmail(value as string);
    if (value && !validateEmail(value as string)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  }}
  error={emailError}
/>
```

### Phone Number Validation
```tsx
const validatePhone = (phone: string) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

<ScouterTextField 
  label="Phone Number"
  placeholder="Enter your phone number"
  value={phone}
  onTextChange={(value) => {
    setPhone(value as string);
    if (value && !validatePhone(value as string)) {
      setPhoneError('Please enter a valid phone number');
    } else {
      setPhoneError('');
    }
  }}
  error={phoneError}
/>
```

### URL Validation
```tsx
const validateURL = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

<ScouterTextField 
  label="Website URL"
  placeholder="https://example.com"
  value={url}
  onTextChange={(value) => {
    setUrl(value as string);
    if (value && !validateURL(value as string)) {
      setUrlError('Please enter a valid URL');
    } else {
      setUrlError('');
    }
  }}
  error={urlError}
/>
```

## Accessibility

The TextField component includes comprehensive accessibility features:

- **Labels**: Proper labeling for screen readers
- **Error Announcements**: Screen readers announce error messages
- **Required Indicators**: Clear indication of required fields
- **Helper Text**: Additional context for screen readers
- **Focus Management**: Proper focus handling and keyboard navigation

## Best Practices

1. **Clear Labels**: Use descriptive labels that clearly indicate the expected input
2. **Helpful Placeholders**: Provide examples or hints in placeholder text
3. **Validation Feedback**: Show errors immediately and clear them when resolved
4. **Consistent Styling**: Use consistent styling across all form fields
5. **Accessibility**: Always provide proper labels and error messages

## Integration Examples

### Search Form
```tsx
const [searchTerm, setSearchTerm] = useState('');
const [searchResults, setSearchResults] = useState([]);

const handleSearch = (term: string) => {
  setSearchTerm(term);
  // Implement search logic here
  const results = performSearch(term);
  setSearchResults(results);
};

<ScouterTextField 
  label="Search"
  placeholder="Search for products..."
  value={searchTerm}
  onTextChange={handleSearch}
  helper={`Found ${searchResults.length} results`}
/>
```

### Settings Form
```tsx
const [settings, setSettings] = useState({
  displayName: '',
  bio: '',
  website: '',
});

<ScouterStack direction="column" gap="lg">
  <ScouterTextField 
    label="Display Name"
    placeholder="Enter your display name"
    value={settings.displayName}
    onTextChange={(value) => setSettings(prev => ({ ...prev, displayName: value as string }))}
    helper="This is how your name will appear to others"
  />
  
  <ScouterTextField 
    label="Bio"
    placeholder="Tell us about yourself"
    value={settings.bio}
    onTextChange={(value) => setSettings(prev => ({ ...prev, bio: value as string }))}
    helper="Optional - maximum 500 characters"
  />
  
  <ScouterTextField 
    label="Website"
    placeholder="https://yourwebsite.com"
    value={settings.website}
    onTextChange={(value) => setSettings(prev => ({ ...prev, website: value as string }))}
    helper="Optional - your personal website"
  />
</ScouterStack>
```

### Contact Form
```tsx
const [contact, setContact] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
});

<ScouterStack direction="column" gap="md">
  <ScouterTextField 
    label="Your Name"
    placeholder="Enter your full name"
    required={true}
    value={contact.name}
    onTextChange={(value) => setContact(prev => ({ ...prev, name: value as string }))}
  />
  
  <ScouterTextField 
    label="Email Address"
    placeholder="Enter your email"
    required={true}
    value={contact.email}
    onTextChange={(value) => setContact(prev => ({ ...prev, email: value as string }))}
  />
  
  <ScouterTextField 
    label="Subject"
    placeholder="What is this about?"
    required={true}
    value={contact.subject}
    onTextChange={(value) => setContact(prev => ({ ...prev, subject: value as string }))}
  />
  
  <ScouterTextField 
    label="Message"
    placeholder="Enter your message"
    required={true}
    value={contact.message}
    onTextChange={(value) => setContact(prev => ({ ...prev, message: value as string }))}
    helper="Please provide as much detail as possible"
  />
</ScouterStack>
``` 