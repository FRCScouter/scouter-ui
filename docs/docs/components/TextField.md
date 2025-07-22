---
sidebar_position: 10
---

# TextField

The `TextField` component is a complete form input that includes a label, placeholder, helper text, and error message handling. It's designed to be a flexible and comprehensive solution for text input in your forms.

## Usage

```jsx
import { ScouterTextField } from 'scouter-ui';
import { useState } from 'react';

function MyComponent() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (text) => {
    setValue(text);
    if (text.length < 5) {
      setError('Must be at least 5 characters');
    } else {
      setError('');
    }
  };

  return (
      <ScouterTextField
        label="Username"
        placeholder="Enter your username"
        value={value}
        onTextChange={handleChange}
        helper="Your public display name"
        error={error}
        required
      />
  );
}
```

## Props

| Prop           | Type                         | Default      | Description                                                              |
|----------------|------------------------------|--------------|--------------------------------------------------------------------------|
| `label`        | `string`                     | -            | The label for the text field.                                            |
| `labelSize`    | `'sm' \| 'md' \| 'lg'`         | `'md'`       | The size of the label text.                                              |
| `required`     | `boolean`                    | `false`      | If `true`, a required indicator (`*`) is shown next to the label.        |
| `placeholder`  | `string`                     | `''`         | The placeholder text to display when the input is empty.                 |
| `onTextChange` | `(value: string \| number) => void` | -            | A callback function that is triggered when the text changes.             |
| `value`        | `string \| number`           | `''`         | The value of the input.                                                  |
| `helper`       | `string`                     | -            | Helper text to display below the input.                                  |
| `error`        | `string`                     | -            | An error message to display. If present, the field will be styled as invalid. |
| `disabled`     | `boolean`                    | `false`      | If `true`, the text field is inactive and cannot be edited.              | 