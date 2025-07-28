# Alert

A dismissible message bar component for displaying feedback, warnings, notifications, or success messages. The Alert component automatically disappears after a specified duration and includes role-based styling and icons.

## Import

```tsx
import { ScouterAlert } from 'scouter-ui';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `"This is alert"` | The text content to display in the alert |
| `duration` | `number` | `3000` | Duration in milliseconds before the alert auto-dismisses |
| `alertRole` | `"warning" \| "success" \| "danger" \| "info"` | `"info"` | The type/role of the alert which determines styling and icon |
| `onRemove` | `() => void` | - | Callback function called when the alert is dismissed |

## Alert Roles

The `alertRole` prop determines the visual styling and icon of the alert:

- **`"info"`** - Blue styling with info icon
- **`"success"`** - Green styling with check icon  
- **`"warning"`** - Yellow styling with warning icon
- **`"danger"`** - Red styling with danger icon

## Basic Usage

```tsx
import { ScouterAlert } from 'scouter-ui';

function MyComponent() {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <View>
      <Button onPress={() => setShowAlert(true)}>
        Show Alert
      </Button>
      
      {showAlert && (
        <ScouterAlert
          label="Operation completed successfully!"
          alertRole="success"
          duration={5000}
          onRemove={() => setShowAlert(false)}
        />
      )}
    </View>
  );
}
```

## Examples

### Info Alert
```tsx
<ScouterAlert
  label="This is an informational message"
  alertRole="info"
  duration={4000}
  onRemove={() => console.log('Alert dismissed')}
/>
```

### Success Alert
```tsx
<ScouterAlert
  label="Your changes have been saved!"
  alertRole="success"
  duration={3000}
  onRemove={() => setShowSuccessAlert(false)}
/>
```

### Warning Alert
```tsx
<ScouterAlert
  label="Please check your input before proceeding"
  alertRole="warning"
  duration={6000}
  onRemove={() => setShowWarningAlert(false)}
/>
```

### Danger Alert
```tsx
<ScouterAlert
  label="An error occurred while processing your request"
  alertRole="danger"
  duration={8000}
  onRemove={() => setShowErrorAlert(false)}
/>
```

## Styling

The Alert component automatically applies role-based styling:

- **Background**: Light color matching the role
- **Border**: Medium color matching the role  
- **Text**: Dark color matching the role
- **Icon**: Material Icons that match the alert role
- **Position**: Fixed at bottom of screen with shadow
- **Animation**: Smooth fade in/out transitions

## Accessibility

The Alert component includes proper accessibility features:

- Uses semantic ARIA roles
- Includes appropriate icons for each alert type
- Supports screen readers with proper labeling
- Auto-dismisses after specified duration

## Best Practices

1. **Use appropriate roles**: Choose the alert role that matches the message type
2. **Keep messages concise**: Alert text should be brief and actionable
3. **Provide dismiss callback**: Always handle the `onRemove` callback to clean up state
4. **Consider duration**: Longer durations for important messages, shorter for notifications
5. **Don't overuse**: Use alerts sparingly to avoid overwhelming users

## Advanced Usage

### Custom Duration
```tsx
<ScouterAlert
  label="This alert will stay visible for 10 seconds"
  alertRole="info"
  duration={10000}
  onRemove={() => setShowAlert(false)}
/>
```

### Immediate Dismiss
```tsx
<ScouterAlert
  label="This alert will dismiss immediately"
  alertRole="success"
  duration={0}
  onRemove={() => setShowAlert(false)}
/>
``` 