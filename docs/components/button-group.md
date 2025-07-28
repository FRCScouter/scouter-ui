# ButtonGroup

A layout component that groups multiple buttons together, automatically handling border radius and spacing. The ButtonGroup component creates a cohesive button group with proper visual connections between adjacent buttons.

## Import

```tsx
import { ScouterButtonGroup, ScouterButton } from 'scouter-ui';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactElement<ButtonProps> \| React.ReactElement<ButtonProps>[]` | - | Button components to group together |
| `direction` | `"row" \| "column"` | `"row"` | Direction to arrange the buttons |
| `style` | `ViewStyle` | - | Additional styles to apply to the container |

## Basic Usage

### Horizontal Button Group
```tsx
import { ScouterButtonGroup, ScouterButton } from 'scouter-ui';

<ScouterButtonGroup>
  <ScouterButton onPress={() => console.log('Left')}>Left</ScouterButton>
  <ScouterButton onPress={() => console.log('Center')}>Center</ScouterButton>
  <ScouterButton onPress={() => console.log('Right')}>Right</ScouterButton>
</ScouterButtonGroup>
```

### Vertical Button Group
```tsx
<ScouterButtonGroup direction="column">
  <ScouterButton onPress={() => console.log('Top')}>Top</ScouterButton>
  <ScouterButton onPress={() => console.log('Middle')}>Middle</ScouterButton>
  <ScouterButton onPress={() => console.log('Bottom')}>Bottom</ScouterButton>
</ScouterButtonGroup>
```

## Examples

### Segmented Control Style
```tsx
<ScouterButtonGroup>
  <ScouterButton 
    color={activeTab === 'all' ? 'blue.500' : 'gray.300'}
    onPress={() => setActiveTab('all')}
  >
    All
  </ScouterButton>
  <ScouterButton 
    color={activeTab === 'favorites' ? 'blue.500' : 'gray.300'}
    onPress={() => setActiveTab('favorites')}
  >
    Favorites
  </ScouterButton>
  <ScouterButton 
    color={activeTab === 'recent' ? 'blue.500' : 'gray.300'}
    onPress={() => setActiveTab('recent')}
  >
    Recent
  </ScouterButton>
</ScouterButtonGroup>
```

### Action Button Group
```tsx
<ScouterButtonGroup>
  <ScouterButton 
    color="red.500"
    onPress={() => handleDelete()}
  >
    Delete
  </ScouterButton>
  <ScouterButton 
    color="gray.500"
    onPress={() => handleCancel()}
  >
    Cancel
  </ScouterButton>
  <ScouterButton 
    color="green.500"
    onPress={() => handleSave()}
  >
    Save
  </ScouterButton>
</ScouterButtonGroup>
```

### Vertical Navigation
```tsx
<ScouterButtonGroup direction="column">
  <ScouterButton onPress={() => navigate('home')}>Home</ScouterButton>
  <ScouterButton onPress={() => navigate('profile')}>Profile</ScouterButton>
  <ScouterButton onPress={() => navigate('settings')}>Settings</ScouterButton>
  <ScouterButton onPress={() => navigate('help')}>Help</ScouterButton>
</ScouterButtonGroup>
```

### Mixed Button Types
```tsx
<ScouterButtonGroup>
  <ScouterButton 
    variant="outline"
    onPress={() => console.log('Cancel')}
  >
    Cancel
  </ScouterButton>
  <ScouterButton 
    variant="solid"
    onPress={() => console.log('Confirm')}
  >
    Confirm
  </ScouterButton>
</ScouterButtonGroup>
```

## Border Radius Handling

The ButtonGroup component automatically handles border radius for connected buttons:

- **First Button**: Rounded corners on the leading edge
- **Middle Buttons**: No rounded corners (flat connection)
- **Last Button**: Rounded corners on the trailing edge

This creates a seamless visual connection between buttons while maintaining proper touch targets.

## Styling

### Custom Container Styling
```tsx
<ScouterButtonGroup 
  style={{ 
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  }}
>
  <ScouterButton onPress={() => console.log('Button 1')}>Button 1</ScouterButton>
  <ScouterButton onPress={() => console.log('Button 2')}>Button 2</ScouterButton>
</ScouterButtonGroup>
```

### Responsive Button Group
```tsx
<ScouterButtonGroup style={{ flex: 1 }}>
  <ScouterButton 
    style={{ flex: 1 }}
    onPress={() => console.log('Equal width buttons')}
  >
    Button 1
  </ScouterButton>
  <ScouterButton 
    style={{ flex: 1 }}
    onPress={() => console.log('Equal width buttons')}
  >
    Button 2
  </ScouterButton>
</ScouterButtonGroup>
```

## Advanced Usage

### Dynamic Button Group
```tsx
const [buttons, setButtons] = useState([
  { id: 1, label: 'Option 1', onPress: () => console.log('Option 1') },
  { id: 2, label: 'Option 2', onPress: () => console.log('Option 2') },
  { id: 3, label: 'Option 3', onPress: () => console.log('Option 3') },
]);

<ScouterButtonGroup>
  {buttons.map((button) => (
    <ScouterButton 
      key={button.id}
      onPress={button.onPress}
    >
      {button.label}
    </ScouterButton>
  ))}
</ScouterButtonGroup>
```

### Conditional Button Group
```tsx
<ScouterButtonGroup>
  <ScouterButton onPress={() => handleEdit()}>Edit</ScouterButton>
  {canDelete && (
    <ScouterButton 
      color="red.500"
      onPress={() => handleDelete()}
    >
      Delete
    </ScouterButton>
  )}
  {isAdmin && (
    <ScouterButton 
      color="purple.500"
      onPress={() => handleAdminAction()}
    >
      Admin
    </ScouterButton>
  )}
</ScouterButtonGroup>
```

### Button Group with Icons
```tsx
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';

<ScouterButtonGroup>
  <ScouterButton 
    onPress={() => console.log('Previous')}
    Icon={<MaterialIcons name="chevron-left" size={20} color="white" />}
  >
    Previous
  </ScouterButton>
  <ScouterButton 
    onPress={() => console.log('Next')}
    Icon={<MaterialIcons name="chevron-right" size={20} color="white" />}
  >
    Next
  </ScouterButton>
</ScouterButtonGroup>
```

## Best Practices

1. **Consistent Button Types**: Use similar button variants within a group for visual consistency
2. **Logical Grouping**: Group related actions together
3. **Clear Labels**: Ensure button labels clearly indicate their purpose
4. **Touch Targets**: Maintain adequate touch target sizes
5. **Visual Hierarchy**: Use color and styling to indicate primary vs secondary actions

## Accessibility

The ButtonGroup component maintains accessibility by:

- Preserving individual button accessibility props
- Maintaining proper touch targets for each button
- Supporting screen reader navigation
- Providing clear visual feedback for button states 