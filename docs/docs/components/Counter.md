---
sidebar_position: 5
---

# Counter

The `Counter` component provides a simple interface for incrementing and decrementing a numerical value. It's composed of two buttons and a heading that displays the current value.

## Usage

```jsx
import { ScouterCounter } from 'scouter-ui';
import { useRef } from 'react';

function MyComponent() {
  const counterRef = useRef(null);

  const getValue = () => {
    if (counterRef.current) {
      console.log(counterRef.current.getValue());
    }
  };

  return (
      <ScouterCounter
        initialValue={5}
        onChange={(newValue) => console.log('New value:', newValue)}
        valueRef={counterRef}
        color="purple.500"
      />
  );
}
```

## Props

| Prop           | Type                            | Default      | Description                                                                     |
|----------------|---------------------------------|--------------|---------------------------------------------------------------------------------|
| `onChange`     | `(newValue: number) => void`    | -            | A callback function that is triggered when the counter's value changes.         |
| `valueRef`     | `Ref<{ getValue: () => number }>` | -            | A ref that exposes a `getValue` method to imperatively get the current value.   |
| `color`        | `ScouterUIThemeColor`           | -            | The color of the increment and decrement buttons, resolved from the theme.      |
| `initialValue` | `number`                        | `0`          | The initial value of the counter.                                               |
| `...stackProps`| `Omit<StackProps, "children">`  | -            | Any other props accepted by the `Stack` component, except for `children`.       | 