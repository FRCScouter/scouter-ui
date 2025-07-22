---
sidebar_position: 7
---

# Heading

The `Heading` component is used to render text with different sizes, weights, and colors, based on the application's theme. It's a fundamental building block for creating a consistent typographic hierarchy.

## Usage

```jsx
import { ScouterHeading } from 'scouter-ui';

function MyComponent() {
  return (
      <ScouterHeading size="2xl" weight="bold" color="primary.500">
        This is a Main Heading
      </ScouterHeading>
  );
}
```

## Props

| Prop      | Type                  | Default      | Description                                                           |
|-----------|-----------------------|--------------|-----------------------------------------------------------------------|
| `size`    | `ScouterSizeKey`      | `'md'`       | The font size of the text, mapped to a value in `ScouterSizeMap`.     |
| `weight`  | `ScouterFontWeightKey`| `'normal'`   | The font weight of the text, mapped to a value in `ScouterFontWeightMap`. |
| `color`   | `ScouterUIThemeColor` | `'black.50'` | The color of the text, resolved from the application's theme.         |
| `children`| `React.ReactNode`     | -            | The text or other elements to be rendered inside the `Heading`.       |
| `style`   | `ViewStyle`           | -            | Custom styles to apply to the `Heading` component.                    | 