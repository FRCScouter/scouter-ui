---
sidebar_position: 9
---

# Stack

The `Stack` component is a layout utility that arranges its children in a horizontal or vertical line with a specified gap between them. It's a powerful tool for creating consistent spacing in your UI.

## Usage

```jsx
import { ScouterStack } from 'scouter-ui';

function MyComponent() {
  return (
    <ScouterStack direction="column" gap="md">
      <Button>First Button</Button>
      <Button>Second Button</Button>
      <Button>Third Button</Button>
    </ScouterStack>
  );
}
```

## Props

| Prop        | Type                               | Default     | Description                                                                 |
|-------------|------------------------------------|-------------|-----------------------------------------------------------------------------|
| `direction` | `'column' \| 'row'`                | `'row'`     | The direction to arrange the children. Can be `column` or `row`.            |
| `gap`       | `ScouterSizeKey`                   | `'sm'`      | The spacing between each child element, mapped to a value in `ScouterSizeMap`. |
| `style`     | `ViewStyle \| ViewStyle[]`         | -           | Custom styles to apply to the `Stack` container.                            |
| `children`  | `React.ReactNode`                  | -           | The child elements to be arranged by the `Stack`.                           |
| `ref`       | `Ref<View>`                        | -           | A ref to the underlying `View` component.                                   |
| `...rest`   | `ViewProps`                        | -           | Any other props accepted by the React Native `View` component.              | 