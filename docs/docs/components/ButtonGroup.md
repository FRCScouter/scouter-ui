---
sidebar_position: 3
---

# ButtonGroup

The `ButtonGroup` component is used to group related buttons together, either horizontally or vertically. It automatically adjusts the border radius of its children to create a cohesive, joined look.

## Usage

```jsx
import { ScouterButton, ScouterButtonGroup } from 'scouter-ui';

function MyComponent() {
  return (
      <ScouterButtonGroup direction="row">
        <ScouterButton color="blue.500">First</ScouterButton>
        <ScouterButton color="green.500">Second</ScouterButton>
        <ScouterButton color="red.500">Third</ScouterButton>
      </ScouterButtonGroup>
  );
}
```

## Props

| Prop        | Type                                                                  | Default   | Description                                                                         |
|-------------|-----------------------------------------------------------------------|-----------|-------------------------------------------------------------------------------------|
| `children`  | `React.ReactElement<ButtonProps> \| React.ReactElement<ButtonProps>[]` | -         | One or more `Button` components to be rendered inside the group.                    |
| `style`     | `ViewStyle`                                                           | -         | Custom styles to apply to the `ButtonGroup` container.                              |
| `direction` | `'row' \| 'column'`                                                   | `'row'`   | The direction in which the buttons should be arranged. Can be `row` or `column`.    |

The `ButtonGroup` component works by cloning its children (`Button` components) and applying new styles to them to achieve the grouped effect. The border radius of the first and last buttons are adjusted to be rounded, while the buttons in between have square corners. 