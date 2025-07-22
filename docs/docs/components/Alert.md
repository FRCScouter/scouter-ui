---
sidebar_position: 1
---

# Alert

The `Alert` component is used to display a temporary, non-interactive message to the user. It's ideal for showing success, warning, error, or informational messages that automatically dismiss after a set duration.

## Usage

```jsx
import { ScouterAlert } from 'scouter-ui';

function MyComponent() {
  return (
      <ScouterAlert
        label="This is an informational alert."
        duration={5000}
        alertRole="info"
        onRemove={() => console.log('Alert removed')}
      />
  );
}
```

## Props

| Prop        | Type                                         | Default      | Description                                                 |
|-------------|----------------------------------------------|--------------|-------------------------------------------------------------|
| `label`     | `string`                                     | `'This is alert'` | The text content of the alert.                              |
| `duration`  | `number`                                     | `3000`       | The time in milliseconds before the alert automatically hides. |
| `alertRole` | `'warning' \| 'success' \| 'danger' \| 'info'` | `'info'`     | The role of the alert, which determines its color and icon. |
| `onRemove`  | `() => void`                                 | -            | A callback function that is triggered when the alert is removed. |

The `Alert` component uses different colors and icons based on the `alertRole` prop:
-   **danger**: Red background with a "dangerous" icon.
-   **warning**: Yellow background with a "warning-amber" icon.
-   **success**: Green background with a "check" icon.
-   **info**: Blue background with an "info-outline" icon. 