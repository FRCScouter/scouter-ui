# Heading

A styled text component for titles, section headers, and other prominent text elements. The Heading component supports customizable sizes, weights, colors, and follows the design system's typography scale.

## Import

```tsx
import { ScouterHeading } from 'scouter-ui';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | The text content to display |
| `size` | `ScouterSizeKey` | `"md"` | Font size of the heading |
| `weight` | `ScouterFontWeightKey` | `"normal"` | Font weight of the heading |
| `color` | `ScouterUIThemeColor` | `"black.50"` | Color of the heading text |
| `style` | `ViewStyle` | - | Additional styles to apply |

## Sizes

The Heading component supports the full range of size tokens:

```tsx
// Extra small
<ScouterHeading size="xs">Extra Small Heading</ScouterHeading>

// Small
<ScouterHeading size="sm">Small Heading</ScouterHeading>

// Medium (default)
<ScouterHeading size="md">Medium Heading</ScouterHeading>

// Large
<ScouterHeading size="lg">Large Heading</ScouterHeading>

// Extra large
<ScouterHeading size="xl">Extra Large Heading</ScouterHeading>

// 2XL
<ScouterHeading size="2xl">2XL Heading</ScouterHeading>

// 3XL
<ScouterHeading size="3xl">3XL Heading</ScouterHeading>

// 4XL
<ScouterHeading size="4xl">4XL Heading</ScouterHeading>

// 5XL
<ScouterHeading size="5xl">5XL Heading</ScouterHeading>

// 6XL
<ScouterHeading size="6xl">6XL Heading</ScouterHeading>
```

## Weights

The Heading component supports all font weight options:

```tsx
// Light
<ScouterHeading weight="light">Light Heading</ScouterHeading>

// Normal (default)
<ScouterHeading weight="normal">Normal Heading</ScouterHeading>

// Medium
<ScouterHeading weight="medium">Medium Heading</ScouterHeading>

// Semi-bold
<ScouterHeading weight="semibold">Semi-bold Heading</ScouterHeading>

// Bold
<ScouterHeading weight="bold">Bold Heading</ScouterHeading>

// Extra bold
<ScouterHeading weight="extrabold">Extra Bold Heading</ScouterHeading>

// Black
<ScouterHeading weight="black">Black Heading</ScouterHeading>
```

## Examples

### Basic Heading
```tsx
<ScouterHeading>Welcome to our app</ScouterHeading>
```

### Large Bold Heading
```tsx
<ScouterHeading size="xl" weight="bold">
  Main Title
</ScouterHeading>
```

### Colored Heading
```tsx
<ScouterHeading color="blue.500" size="lg" weight="semibold">
  Blue Heading
</ScouterHeading>
```

### Custom Styled Heading
```tsx
<ScouterHeading 
  size="2xl" 
  weight="bold" 
  color="purple.600"
  style={{ 
    textAlign: 'center',
    marginVertical: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  }}
>
  Custom Styled Heading
</ScouterHeading>
```

## Typography Hierarchy

### Page Title
```tsx
<ScouterHeading size="4xl" weight="bold" color="gray.900">
  Dashboard
</ScouterHeading>
```

### Section Headers
```tsx
<ScouterHeading size="2xl" weight="semibold" color="gray.800">
  Recent Activity
</ScouterHeading>
```

### Subsection Headers
```tsx
<ScouterHeading size="xl" weight="medium" color="gray.700">
  User Profile
</ScouterHeading>
```

### Card Titles
```tsx
<ScouterHeading size="lg" weight="semibold" color="gray.800">
  Product Details
</ScouterHeading>
```

### Small Labels
```tsx
<ScouterHeading size="sm" weight="medium" color="gray.600">
  Category
</ScouterHeading>
```

## Colors

The Heading component supports all theme colors:

```tsx
// Primary colors
<ScouterHeading color="blue.500">Blue Heading</ScouterHeading>
<ScouterHeading color="green.500">Green Heading</ScouterHeading>
<ScouterHeading color="red.500">Red Heading</ScouterHeading>
<ScouterHeading color="purple.500">Purple Heading</ScouterHeading>
<ScouterHeading color="orange.500">Orange Heading</ScouterHeading>

// Gray scale
<ScouterHeading color="gray.900">Dark Gray</ScouterHeading>
<ScouterHeading color="gray.700">Medium Gray</ScouterHeading>
<ScouterHeading color="gray.500">Light Gray</ScouterHeading>
<ScouterHeading color="gray.300">Very Light Gray</ScouterHeading>

// White
<ScouterHeading color="white.50">White Heading</ScouterHeading>
```

## Advanced Usage

### Responsive Typography
```tsx
const [screenSize, setScreenSize] = useState('medium');

const getHeadingSize = () => {
  switch (screenSize) {
    case 'small': return 'lg';
    case 'large': return '3xl';
    default: return 'xl';
  }
};

<ScouterHeading 
  size={getHeadingSize()} 
  weight="bold"
>
  Responsive Heading
</ScouterHeading>
```

### Dynamic Content
```tsx
const [userName, setUserName] = useState('John Doe');

<ScouterHeading size="2xl" weight="semibold" color="blue.600">
  Welcome back, {userName}!
</ScouterHeading>
```

### Conditional Styling
```tsx
const [isError, setIsError] = useState(false);

<ScouterHeading 
  size="lg" 
  weight="semibold"
  color={isError ? 'red.500' : 'green.500'}
>
  {isError ? 'Error occurred' : 'Success!'}
</ScouterHeading>
```

### Heading with Icons
```tsx
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';

<View style={{ flexDirection: 'row', alignItems: 'center' }}>
  <MaterialIcons name="star" size={24} color="#007AFF" />
  <ScouterHeading size="lg" weight="semibold" color="blue.500">
    Featured Content
  </ScouterHeading>
</View>
```

### Animated Heading
```tsx
import { Animated } from 'react-native';

const fadeAnim = useRef(new Animated.Value(0)).current;

useEffect(() => {
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();
}, []);

<Animated.View style={{ opacity: fadeAnim }}>
  <ScouterHeading size="2xl" weight="bold">
    Animated Heading
  </ScouterHeading>
</Animated.View>
```

## Layout Examples

### Centered Heading
```tsx
<ScouterHeading 
  size="3xl" 
  weight="bold" 
  style={{ textAlign: 'center' }}
>
  Centered Title
</ScouterHeading>
```

### Heading with Subtitle
```tsx
<View>
  <ScouterHeading size="2xl" weight="bold" color="gray.900">
    Main Title
  </ScouterHeading>
  <ScouterHeading size="md" weight="normal" color="gray.600">
    Supporting subtitle text
  </ScouterHeading>
</View>
```

### Heading with Spacing
```tsx
<ScouterHeading 
  size="xl" 
  weight="semibold"
  style={{ 
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 16,
  }}
>
  Section Header
</ScouterHeading>
```

## Best Practices

1. **Hierarchy**: Use consistent size hierarchy throughout your app
2. **Readability**: Ensure sufficient contrast between text and background
3. **Consistency**: Use consistent weights and colors for similar heading types
4. **Accessibility**: Maintain adequate touch targets and readable font sizes
5. **Performance**: Avoid excessive re-renders by memoizing static headings

## Accessibility

The Heading component includes accessibility features:

- **Semantic Structure**: Proper heading hierarchy for screen readers
- **Readable Sizes**: All sizes meet minimum accessibility requirements
- **Color Contrast**: Supports high contrast color combinations
- **Touch Targets**: Adequate touch target sizes for interactive elements

## Integration Examples

### Navigation Header
```tsx
<View style={{ 
  flexDirection: 'row', 
  justifyContent: 'space-between', 
  alignItems: 'center',
  paddingHorizontal: 16,
  paddingVertical: 12,
}}>
  <ScouterHeading size="lg" weight="semibold">
    My App
  </ScouterHeading>
  <Button onPress={() => console.log('Settings')}>
    Settings
  </Button>
</View>
```

### Card Header
```tsx
<View style={{ 
  backgroundColor: 'white', 
  borderRadius: 12, 
  padding: 16,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
}}>
  <ScouterHeading size="lg" weight="semibold" color="gray.800">
    Card Title
  </ScouterHeading>
  <Text style={{ marginTop: 8, color: 'gray.600' }}>
    Card content goes here...
  </Text>
</View>
```

### Form Section
```tsx
<View style={{ marginVertical: 16 }}>
  <ScouterHeading size="md" weight="medium" color="gray.700">
    Personal Information
  </ScouterHeading>
  <TextField label="Name" />
  <TextField label="Email" />
</View>
``` 