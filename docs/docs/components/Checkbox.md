---
sidebar_position: 4
---

# Checkbox

The `Checkbox` component allows users to select one or more options from a set. It can be used with or without a label and supports both controlled and uncontrolled state management.

## Usage

```jsx
import { ScouterCheckbox } from 'scouter-ui';

function MyComponent() {
  return (
      <ScouterCheckbox
        checkboxLabel="I agree to the terms and conditions"
        onPress={(isChecked) => console.log(isChecked)}
        color="green.500"
        size="lg"
      />
  );
}
```

## Props

| Prop                      | Type                       | Default            | Description                                                                                                |
|---------------------------|----------------------------|--------------------|------------------------------------------------------------------------------------------------------------|
| `disabled`                | `boolean`                  | `false`            | If `true`, the checkbox is inactive and cannot be toggled.                                                 |
| `onPress`                 | `(isChecked: boolean) => void` | -                  | A callback function that is triggered when the checkbox state changes.                                     |
| `size`                    | `ScouterSizeKey`           | `'xl'`             | The size of the checkbox.                                                                                  |
| `color`                   | `ScouterUIThemeColor`      | `'blue.500'`       | The color of the checkbox, resolved from the theme.                                                        |
| `variant`                 | `'outline' \| 'flat'`      | `'flat'`           | The style variant of the checkbox. `flat` has a solid background when checked, `outline` has only a border. |
| `label`                   | `string`                   | `'checkbox-default'` | An accessibility label for the checkbox.                                                                   |
| `useBuiltInState`         | `boolean`                  | `true`             | If `true`, the component manages its own checked state. If `false`, it's a controlled component.           |
| `isChecked`               | `boolean`                  | `false`            | The checked state of the checkbox (used when `useBuiltInState` is `false`).                                |
| `rounded`                 | `string`                   | `'5px'`            | The border-radius of the checkbox container.                                                               |
| `checkboxLabel`           | `string`                   | -                  | The text label to display next to the checkbox.                                                            |
| `checkboxLabelColor`      | `ScouterUIThemeColor`      | -                  | The color of the checkbox label.                                                                           |
| `checkboxLabelFontWeight` | `ScouterFontWeightKey`     | -                  | The font weight of the checkbox label.                                                                     |
| `checkboxLabelSize`       | `ScouterSizeKey`           | -                  | The font size of the checkbox label.                                                                       | 