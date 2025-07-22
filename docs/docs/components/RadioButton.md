---
sidebar_position: 8
---

# RadioButton

The `RadioButton` component allows users to select a single option from a set. It's typically used in groups where only one choice can be active at a time.

## Usage

```jsx
import { ScouterRadioButton } from 'scouter-ui';

function MyComponent() {
  return (
      <ScouterRadioButton
        radioButtonLabel="Select this option"
        onPress={(isChecked) => console.log('Checked:', isChecked)}
        color="purple.500"
        size="lg"
      />

  );
}
```

## Props

| Prop                       | Type                             | Default                   | Description                                                                      |
|----------------------------|----------------------------------|---------------------------|----------------------------------------------------------------------------------|
| `onPress`                  | `(newState: boolean) => void`    | -                         | A callback function that is triggered when the radio button is pressed.          |
| `color`                    | `ScouterUIThemeColor`            | `'blue.500'`              | The color of the radio button, resolved from the theme.                          |
| `isChecked`                | `boolean`                        | `false`                   | The checked state of the radio button. This makes it a controlled component.     |
| `label`                    | `string`                         | `'radio-button-default'`  | An accessibility label for the radio button.                                     |
| `disabled`                 | `boolean`                        | `false`                   | If `true`, the radio button is inactive and cannot be pressed.                   |
| `size`                     | `ScouterSizeKey`                 | `'lg'`                    | The size of the radio button.                                                    |
| `radioButtonLabel`         | `string`                         | -                         | The text label to display next to the radio button.                              |
| `radioButtonLabelColor`    | `ScouterUIThemeColor`            | -                         | The color of the radio button's label.                                           |
| `radioButtonLabelSize`     | `ScouterSizeKey`                 | -                         | The font size of the radio button's label.                                       |
| `radioButtonLabelWeight`   | `ScouterFontWeightKey`           | -                         | The font weight of the radio button's label.                                     | 