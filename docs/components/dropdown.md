# Dropdown

A modal dropdown component for selecting from a list of options. The Dropdown component supports custom styling, custom rendering, and flexible data types. It includes built-in animations and accessibility features.

## Import

```tsx
import { ScouterDropdown } from 'scouter-ui';
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `T[]` | - | Array of data items to display in dropdown |
| `onSelect` | `(selectedItem: T, index: number) => void` | - | Callback when an item is selected |
| `defaultButtonText` | `string` | `"Select an option"` | Default text shown when no item is selected |
| `buttonStyle` | `ViewStyle` | - | Custom styles for the dropdown button |
| `buttonTextStyle` | `TextStyle` | - | Custom styles for the button text |
| `dropdownStyle` | `ViewStyle` | - | Custom styles for the dropdown modal |
| `rowStyle` | `ViewStyle` | - | Custom styles for individual dropdown rows |
| `rowTextStyle` | `TextStyle` | - | Custom styles for row text |
| `renderCustomizedButtonChild` | `(selectedItem: T \| null) => React.ReactNode` | - | Custom render function for button content |
| `renderCustomizedRowChild` | `(item: T, index: number, isSelected: boolean) => React.ReactNode` | - | Custom render function for row content |
| `disabled` | `boolean` | `false` | Whether the dropdown is disabled |
| `dropdownIconPosition` | `"left" \| "right"` | `"right"` | Position of the dropdown arrow icon |

## Basic Usage

### Simple Dropdown
```tsx
import { ScouterDropdown } from 'scouter-ui';

const options = ['Apple', 'Banana', 'Orange', 'Grape'];

<ScouterDropdown 
  data={options}
  onSelect={(item, index) => console.log('Selected:', item, 'at index:', index)}
/>
```

### Dropdown with Custom Button Text
```tsx
<ScouterDropdown 
  data={['Option 1', 'Option 2', 'Option 3']}
  defaultButtonText="Choose an option"
  onSelect={(item) => console.log('Selected:', item)}
/>
```

## Examples

### Basic String Array
```tsx
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

<ScouterDropdown 
  data={fruits}
  onSelect={(fruit) => setSelectedFruit(fruit)}
  defaultButtonText="Select a fruit"
/>
```

### Object Array with Custom Rendering
```tsx
const countries = [
  { id: 1, name: 'United States', code: 'US' },
  { id: 2, name: 'Canada', code: 'CA' },
  { id: 3, name: 'United Kingdom', code: 'UK' },
];

<ScouterDropdown 
  data={countries}
  onSelect={(country) => setSelectedCountry(country)}
  defaultButtonText="Select a country"
  renderCustomizedButtonChild={(selectedItem) => (
    <Text>{selectedItem ? selectedItem.name : 'Select a country'}</Text>
  )}
  renderCustomizedRowChild={(item, index, isSelected) => (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text>{item.name}</Text>
      <Text style={{ color: 'gray' }}>{item.code}</Text>
    </View>
  )}
/>
```

### Disabled Dropdown
```tsx
<ScouterDropdown 
  data={['Option 1', 'Option 2']}
  disabled={true}
  onSelect={(item) => console.log('This won\'t fire')}
  defaultButtonText="Disabled dropdown"
/>
```

### Custom Styled Dropdown
```tsx
<ScouterDropdown 
  data={['Red', 'Green', 'Blue']}
  onSelect={(color) => setSelectedColor(color)}
  buttonStyle={{
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
  }}
  buttonTextStyle={{
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
  }}
  dropdownStyle={{
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
  }}
  rowStyle={{
    paddingVertical: 12,
    paddingHorizontal: 16,
  }}
  rowTextStyle={{
    fontSize: 16,
    color: '#333',
  }}
/>
```

## Advanced Usage

### Form Integration
```tsx
const [formData, setFormData] = useState({
  category: '',
  priority: '',
});

const categories = ['Bug', 'Feature', 'Enhancement', 'Documentation'];
const priorities = ['Low', 'Medium', 'High', 'Critical'];

const handleCategorySelect = (category: string) => {
  setFormData(prev => ({ ...prev, category }));
};

const handlePrioritySelect = (priority: string) => {
  setFormData(prev => ({ ...prev, priority }));
};

<ScouterDropdown 
  data={categories}
  onSelect={handleCategorySelect}
  defaultButtonText="Select category"
  buttonStyle={{ marginBottom: 10 }}
/>

<ScouterDropdown 
  data={priorities}
  onSelect={handlePrioritySelect}
  defaultButtonText="Select priority"
/>
```

### Custom Button Content
```tsx
const [selectedUser, setSelectedUser] = useState(null);

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', avatar: '👤' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', avatar: '👤' },
];

<ScouterDropdown 
  data={users}
  onSelect={setSelectedUser}
  renderCustomizedButtonChild={(selectedItem) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {selectedItem ? (
        <>
          <Text style={{ fontSize: 20, marginRight: 8 }}>{selectedItem.avatar}</Text>
          <Text>{selectedItem.name}</Text>
        </>
      ) : (
        <Text>Select a user</Text>
      )}
    </View>
  )}
  renderCustomizedRowChild={(item, index, isSelected) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginRight: 8 }}>{item.avatar}</Text>
      <View>
        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
        <Text style={{ fontSize: 12, color: 'gray' }}>{item.email}</Text>
      </View>
    </View>
  )}
/>
```

### Dropdown with Icons
```tsx
import { MaterialIcons } from 'react-native-vector-icons/MaterialIcons';

const actions = [
  { id: 1, label: 'Edit', icon: 'edit' },
  { id: 2, label: 'Delete', icon: 'delete' },
  { id: 3, label: 'Share', icon: 'share' },
];

<ScouterDropdown 
  data={actions}
  onSelect={(action) => console.log('Action:', action.label)}
  renderCustomizedButtonChild={(selectedItem) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {selectedItem && (
        <MaterialIcons 
          name={selectedItem.icon} 
          size={20} 
          color="#333" 
          style={{ marginRight: 8 }}
        />
      )}
      <Text>{selectedItem ? selectedItem.label : 'Select action'}</Text>
    </View>
  )}
  renderCustomizedRowChild={(item, index, isSelected) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <MaterialIcons 
        name={item.icon} 
        size={20} 
        color="#333" 
        style={{ marginRight: 8 }}
      />
      <Text>{item.label}</Text>
    </View>
  )}
/>
```

### Dropdown with Search (Custom Implementation)
```tsx
const [searchTerm, setSearchTerm] = useState('');
const [filteredData, setFilteredData] = useState(originalData);

const allOptions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig'];

useEffect(() => {
  const filtered = allOptions.filter(option => 
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredData(filtered);
}, [searchTerm]);

<ScouterDropdown 
  data={filteredData}
  onSelect={(item) => {
    setSelectedItem(item);
    setSearchTerm('');
  }}
  renderCustomizedButtonChild={(selectedItem) => (
    <Text>{selectedItem || 'Search and select...'}</Text>
  )}
  renderCustomizedRowChild={(item, index, isSelected) => (
    <View style={{ padding: 12 }}>
      <Text>{item}</Text>
    </View>
  )}
/>
```

## Icon Positions

### Right Icon (Default)
```tsx
<ScouterDropdown 
  data={['Option 1', 'Option 2']}
  dropdownIconPosition="right"
  onSelect={(item) => console.log('Selected:', item)}
/>
```

### Left Icon
```tsx
<ScouterDropdown 
  data={['Option 1', 'Option 2']}
  dropdownIconPosition="left"
  onSelect={(item) => console.log('Selected:', item)}
/>
```

## Styling Options

### Custom Button Styling
```tsx
<ScouterDropdown 
  data={['Option 1', 'Option 2']}
  buttonStyle={{
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
  }}
  buttonTextStyle={{
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }}
  onSelect={(item) => console.log('Selected:', item)}
/>
```

### Custom Dropdown Styling
```tsx
<ScouterDropdown 
  data={['Option 1', 'Option 2']}
  dropdownStyle={{
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  }}
  rowStyle={{
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  }}
  onSelect={(item) => console.log('Selected:', item)}
/>
```

## Accessibility

The Dropdown component includes comprehensive accessibility features:

- **Touch Targets**: Adequate touch target sizes
- **Screen Reader**: Proper accessibility labels and announcements
- **Keyboard Navigation**: Supports keyboard interaction
- **Focus Management**: Proper focus handling for modal interactions

## Best Practices

1. **Clear Labels**: Use descriptive default button text
2. **Consistent Styling**: Maintain consistent styling with your app theme
3. **Data Validation**: Ensure data is properly formatted for your use case
4. **Error Handling**: Handle edge cases like empty data arrays
5. **Performance**: For large datasets, consider implementing search or pagination

## Integration Examples

### Settings Form
```tsx
const [settings, setSettings] = useState({
  theme: '',
  language: '',
  notifications: '',
});

const themes = ['Light', 'Dark', 'Auto'];
const languages = ['English', 'Spanish', 'French'];
const notificationLevels = ['None', 'Low', 'High'];

<ScouterDropdown 
  data={themes}
  onSelect={(theme) => setSettings(prev => ({ ...prev, theme }))}
  defaultButtonText="Select theme"
/>

<ScouterDropdown 
  data={languages}
  onSelect={(language) => setSettings(prev => ({ ...prev, language }))}
  defaultButtonText="Select language"
/>

<ScouterDropdown 
  data={notificationLevels}
  onSelect={(level) => setSettings(prev => ({ ...prev, notifications: level }))}
  defaultButtonText="Select notification level"
/>
```

### Filter Component
```tsx
const [filters, setFilters] = useState({
  status: '',
  priority: '',
  assignee: '',
});

const statuses = ['All', 'Open', 'In Progress', 'Closed'];
const priorities = ['All', 'Low', 'Medium', 'High'];
const assignees = ['All', 'John', 'Jane', 'Bob'];

<ScouterDropdown 
  data={statuses}
  onSelect={(status) => setFilters(prev => ({ ...prev, status }))}
  defaultButtonText="Filter by status"
/>

<ScouterDropdown 
  data={priorities}
  onSelect={(priority) => setFilters(prev => ({ ...prev, priority }))}
  defaultButtonText="Filter by priority"
/>

<ScouterDropdown 
  data={assignees}
  onSelect={(assignee) => setFilters(prev => ({ ...prev, assignee }))}
  defaultButtonText="Filter by assignee"
/>
``` 