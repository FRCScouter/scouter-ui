---
sidebar_position: 6
---

# Dropdown

The `Dropdown` component allows users to select an option from a list in a modal overlay. It's highly customizable, allowing for custom rendering of both the button and the rows.

## Usage

```jsx
import { ScouterDropdown } from 'scouter-ui';

function MyComponent() {
  const data = ['Option 1', 'Option 2', 'Option 3'];

  return (
      <ScouterDropdown
        data={data}
        onSelect={(selectedItem, index) => console.log(selectedItem, index)}
        defaultButtonText="Select an option"
      />
  );
}
```

## Props

| Prop                           | Type                                                     | Default                | Description                                                                                             |
|--------------------------------|----------------------------------------------------------|------------------------|---------------------------------------------------------------------------------------------------------|
| `data`                         | `T[]`                                                    | -                      | An array of items to be displayed in the dropdown list.                                                 |
| `onSelect`                     | `(selectedItem: T, index: number) => void`               | -                      | A callback function that is triggered when an item is selected.                                         |
| `defaultButtonText`            | `string`                                                 | `'Select an option'`   | The text to display on the button when no option is selected.                                           |
| `buttonStyle`                  | `ViewStyle`                                              | -                      | Custom styles for the dropdown button.                                                                  |
| `buttonTextStyle`              | `TextStyle`                                              | -                      | Custom styles for the text inside the dropdown button.                                                  |
| `dropdownStyle`                | `ViewStyle`                                              | -                      | Custom styles for the dropdown container.                                                               |
| `rowStyle`                     | `ViewStyle`                                              | -                      | Custom styles for each row in the dropdown list.                                                        |
| `rowTextStyle`                 | `TextStyle`                                              | -                      | Custom styles for the text in each row.                                                                 |
| `renderCustomizedButtonChild`  | `(selectedItem: T \| null) => React.ReactNode`           | -                      | A function to render a custom component for the dropdown button.                                        |
| `renderCustomizedRowChild`     | `(item: T, index: number, isSelected: boolean) => React.ReactNode` | -                      | A function to render a custom component for each row in the list.                                       |
| `disabled`                     | `boolean`                                                | `false`                | If `true`, the dropdown is inactive and cannot be opened.                                               |
| `dropdownIconPosition`         | `'left' \| 'right'`                                      | `'right'`              | The position of the dropdown arrow icon within the button.                                              | 