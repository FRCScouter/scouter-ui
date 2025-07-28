# Stack

A flexbox-based layout component for spacing and aligning children in a row or column. The Stack component automatically handles spacing between children and supports all standard React Native View props.

## Import

```tsx
import { ScouterStack } from 'scouter-ui';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | - | The content to display in the stack |
| `direction` | `"row" \| "column"` | `"row"` | Direction to arrange the children |
| `gap` | `ScouterSizeKey` | `"sm"` | Gap between children |
| `style` | `ViewStyle \| ViewStyle[]` | - | Additional styles to apply |
| `ref` | `Ref<View>` | - | Ref to the underlying View component |

### Inherited Props

The Stack component extends React Native's `ViewProps`, so you can use all standard View props like `onLayout`, `testID`, etc.

## Basic Usage

### Horizontal Stack (Default)
```tsx
import { ScouterStack } from 'scouter-ui';

<ScouterStack>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</ScouterStack>
```

### Vertical Stack
```tsx
<ScouterStack direction="column">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</ScouterStack>
```

## Gap Sizes

The Stack component supports all size tokens for gaps:

```tsx
// No gap
<ScouterStack gap="none">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</ScouterStack>

// Extra small gap
<ScouterStack gap="xs">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</ScouterStack>

// Small gap (default)
<ScouterStack gap="sm">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</ScouterStack>

// Medium gap
<ScouterStack gap="md">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</ScouterStack>

// Large gap
<ScouterStack gap="lg">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</ScouterStack>

// Extra large gap
<ScouterStack gap="xl">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</ScouterStack>
```

## Examples

### Basic Layout
```tsx
<ScouterStack direction="column" gap="md">
  <ScouterHeading size="lg">Title</ScouterHeading>
  <Text>Description text</Text>
  <ScouterButton onPress={() => console.log('Pressed')}>
    Action Button
  </ScouterButton>
</ScouterStack>
```

### Form Layout
```tsx
<ScouterStack direction="column" gap="lg">
  <ScouterTextField label="Name" />
  <ScouterTextField label="Email" />
  <ScouterTextField label="Phone" />
  
  <ScouterStack direction="row" gap="md">
    <ScouterButton onPress={() => console.log('Cancel')}>
      Cancel
    </ScouterButton>
    <ScouterButton onPress={() => console.log('Save')}>
      Save
    </ScouterButton>
  </ScouterStack>
</ScouterStack>
```

### Card Layout
```tsx
<ScouterStack 
  direction="column" 
  gap="md"
  style={{
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  }}
>
  <ScouterHeading size="lg" weight="semibold">
    Card Title
  </ScouterHeading>
  <Text style={{ color: 'gray.600' }}>
    Card description goes here...
  </Text>
  <ScouterButton onPress={() => console.log('Action')}>
    View Details
  </ScouterButton>
</ScouterStack>
```

### Navigation Bar
```tsx
<ScouterStack 
  direction="row" 
  gap="lg"
  style={{
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  }}
>
  <ScouterHeading size="lg" weight="semibold">
    My App
  </ScouterHeading>
  <ScouterButton onPress={() => console.log('Settings')}>
    Settings
  </ScouterButton>
  <ScouterButton onPress={() => console.log('Profile')}>
    Profile
  </ScouterButton>
</ScouterStack>
```

## Advanced Usage

### Responsive Layout
```tsx
const [isLandscape, setIsLandscape] = useState(false);

<ScouterStack 
  direction={isLandscape ? "row" : "column"}
  gap="md"
>
  <View style={{ flex: isLandscape ? 1 : undefined }}>
    <Text>Content 1</Text>
  </View>
  <View style={{ flex: isLandscape ? 1 : undefined }}>
    <Text>Content 2</Text>
  </View>
</ScouterStack>
```

### Nested Stacks
```tsx
<ScouterStack direction="column" gap="lg">
  {/* Header */}
  <ScouterStack direction="row" gap="md">
    <ScouterHeading size="xl">Dashboard</ScouterHeading>
    <ScouterButton onPress={() => console.log('Refresh')}>
      Refresh
    </ScouterButton>
  </ScouterStack>
  
  {/* Content */}
  <ScouterStack direction="row" gap="md">
    {/* Left Column */}
    <ScouterStack direction="column" gap="sm" style={{ flex: 1 }}>
      <Text>Left content</Text>
      <Text>More content</Text>
    </ScouterStack>
    
    {/* Right Column */}
    <ScouterStack direction="column" gap="sm" style={{ flex: 1 }}>
      <Text>Right content</Text>
      <Text>More content</Text>
    </ScouterStack>
  </ScouterStack>
</ScouterStack>
```

### Conditional Layout
```tsx
const [showDetails, setShowDetails] = useState(false);

<ScouterStack direction="column" gap="md">
  <ScouterStack direction="row" gap="sm">
    <Text>Basic Info</Text>
    <ScouterButton onPress={() => setShowDetails(!showDetails)}>
      {showDetails ? 'Hide' : 'Show'} Details
    </ScouterButton>
  </ScouterStack>
  
  {showDetails && (
    <ScouterStack direction="column" gap="sm">
      <Text>Additional details...</Text>
      <Text>More information...</Text>
    </ScouterStack>
  )}
</ScouterStack>
```

### Custom Styling
```tsx
<ScouterStack 
  direction="row" 
  gap="lg"
  style={{
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  }}
>
  <ScouterStack direction="column" gap="xs">
    <ScouterHeading size="md" weight="semibold">
      Item Title
    </ScouterHeading>
    <Text style={{ color: 'gray.600' }}>Item description</Text>
  </ScouterStack>
  
  <ScouterButton onPress={() => console.log('Action')}>
    Action
  </ScouterButton>
</ScouterStack>
```

### List Layout
```tsx
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

<ScouterStack direction="column" gap="sm">
  {items.map((item, index) => (
    <ScouterStack 
      key={index}
      direction="row" 
      gap="md"
      style={{
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
      }}
    >
      <Text>{item}</Text>
      <ScouterButton onPress={() => console.log(`Action for ${item}`)}>
        Action
      </ScouterButton>
    </ScouterStack>
  ))}
</ScouterStack>
```

## Layout Patterns

### Centered Content
```tsx
<ScouterStack 
  direction="column" 
  gap="md"
  style={{ 
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  }}
>
  <ScouterHeading size="2xl" weight="bold">
    Welcome
  </ScouterHeading>
  <Text style={{ textAlign: 'center' }}>
    This content is centered both horizontally and vertically
  </Text>
  <ScouterButton onPress={() => console.log('Get Started')}>
    Get Started
  </ScouterButton>
</ScouterStack>
```

### Space Between
```tsx
<ScouterStack 
  direction="row" 
  gap="md"
  style={{ justifyContent: 'space-between' }}
>
  <Text>Left content</Text>
  <Text>Right content</Text>
</ScouterStack>
```

### Equal Width Columns
```tsx
<ScouterStack direction="row" gap="md">
  <View style={{ flex: 1 }}>
    <Text>Column 1</Text>
  </View>
  <View style={{ flex: 1 }}>
    <Text>Column 2</Text>
  </View>
  <View style={{ flex: 1 }}>
    <Text>Column 3</Text>
  </View>
</ScouterStack>
```

## Performance Considerations

### Memoized Stacks
```tsx
import { memo } from 'react';

const MemoizedStack = memo(({ children, ...props }) => (
  <ScouterStack {...props}>
    {children}
  </ScouterStack>
));

// Use for frequently re-rendering components
<MemoizedStack direction="column" gap="md">
  <Text>Static content</Text>
  <Text>More content</Text>
</MemoizedStack>
```

### Conditional Rendering
```tsx
<ScouterStack direction="column" gap="md">
  {items.map((item) => (
    <ScouterStack key={item.id} direction="row" gap="sm">
      <Text>{item.title}</Text>
      {item.showAction && (
        <ScouterButton onPress={() => handleAction(item.id)}>
          Action
        </ScouterButton>
      )}
    </ScouterStack>
  ))}
</ScouterStack>
```

## Best Practices

1. **Consistent Gaps**: Use consistent gap sizes throughout your app
2. **Semantic Structure**: Use Stack to create logical content groupings
3. **Responsive Design**: Consider different screen sizes when choosing direction
4. **Performance**: Avoid deeply nested stacks for better performance
5. **Accessibility**: Ensure proper touch targets and screen reader support

## Integration Examples

### Form Layout
```tsx
<ScouterStack direction="column" gap="lg">
  <ScouterHeading size="lg" weight="semibold">
    Contact Form
  </ScouterHeading>
  
  <ScouterStack direction="column" gap="md">
    <ScouterTextField label="First Name" />
    <ScouterTextField label="Last Name" />
    <ScouterTextField label="Email" />
    <ScouterTextField label="Phone" />
  </ScouterStack>
  
  <ScouterStack direction="row" gap="md">
    <ScouterButton onPress={() => console.log('Cancel')}>
      Cancel
    </ScouterButton>
    <ScouterButton onPress={() => console.log('Submit')}>
      Submit
    </ScouterButton>
  </ScouterStack>
</ScouterStack>
```

### Dashboard Layout
```tsx
<ScouterStack direction="column" gap="lg">
  {/* Header */}
  <ScouterStack direction="row" gap="md" style={{ alignItems: 'center' }}>
    <ScouterHeading size="xl" weight="bold">
      Dashboard
    </ScouterHeading>
    <ScouterButton onPress={() => console.log('Settings')}>
      Settings
    </ScouterButton>
  </ScouterStack>
  
  {/* Stats Row */}
  <ScouterStack direction="row" gap="md">
    <View style={{ flex: 1, backgroundColor: 'white', padding: 16, borderRadius: 8 }}>
      <Text>Stat 1</Text>
    </View>
    <View style={{ flex: 1, backgroundColor: 'white', padding: 16, borderRadius: 8 }}>
      <Text>Stat 2</Text>
    </View>
    <View style={{ flex: 1, backgroundColor: 'white', padding: 16, borderRadius: 8 }}>
      <Text>Stat 3</Text>
    </View>
  </ScouterStack>
  
  {/* Content */}
  <ScouterStack direction="row" gap="lg">
    <ScouterStack direction="column" gap="md" style={{ flex: 2 }}>
      <Text>Main content area</Text>
    </ScouterStack>
    <ScouterStack direction="column" gap="md" style={{ flex: 1 }}>
      <Text>Sidebar content</Text>
    </ScouterStack>
  </ScouterStack>
</ScouterStack>
``` 