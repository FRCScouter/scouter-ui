---
sidebar_position: 2
---

# Button

The `Button` component is a versatile and fundamental UI element that enables users to trigger actions. It can be customized with different colors, variants, and can include an icon alongside text.

## Usage

```jsx
import { ScouterButton } from 'scouter-ui';
import Icon from 'react-native-vector-icons/MaterialIcons';

function MyComponent() {
  return (
      <ScouterButton
        color="blue.500"
        variant="solid"
        onPress={() => console.log('Button pressed!')}
        Icon={<Icon name="add" size={20} color="white" />}
      >
        Add Item
      </ScouterButton>
  );
}
```

## Props

| Prop                  | Type                                      | Default        | Description                                                                                             |
|-----------------------|-------------------------------------------|----------------|---------------------------------------------------------------------------------------------------------|
| `color`               | `ScouterUIThemeColor`                     | `'blue.500'`   | The base color of the button, resolved from the theme.                                                  |
| `variant`             | `'solid' \| 'outline'`                    | `'solid'`      | The style variant of the button. `solid` has a background color, `outline` has a border.                |
| `disabled`            | `boolean`                                 | `false`        | If `true`, the button is inactive and cannot be pressed.                                                |
| `Icon`                | `React.ReactElement`                      | -              | An optional icon to display within the button.                                                          |
| `children`            | `React.ReactNode`                         | -              | The text or other elements to display inside the button.                                                |
| `style`               | `StyleProp<ViewStyle>`                    | -              | Custom styles to apply to the button.                                                                   |
| `buttonLabelWeight`   | `ScouterFontWeightKey`                    | -              | The font weight of the button's label.                                                                  |
| `buttonLabelColor`    | `ScouterUIThemeColor`                     | -              | The color of the button's label text.                                                                   |
| `buttonLabelSize`     | `ScouterSizeKey`                          | -              | The font size of the button's label.                                                                    |
| `...rest`             | `PressableProps`                          | -              | Any other props accepted by the React Native `Pressable` component.                                     | 