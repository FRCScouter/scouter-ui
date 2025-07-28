<img src="assets/scouter-ui-banner.png" alt="Scouter UI Banner" width="100%">


# Scouter UI

A modern, customizable UI component library for React Native, designed to accelerate your app development with beautiful, accessible, and easy-to-use components. Built with Expo and TypeScript.

## Features

- ⚡️ Fast and lightweight
- 🎨 Customizable themes
- 🧩 Ready-to-use components (Button, Alert, Dialog, Checkbox, etc.)
- 🛡️ TypeScript support
- 📱 Works with Expo and React Native CLI

## Installation

Using npm:

```bash
npm install scouter-ui
```

Or using yarn:

```bash
yarn add scouter-ui
```

## Usage

Wrap your app with the `ScouterUIProvider` and start using components:

```tsx
import { ScouterUIProvider, Button } from "scouter-ui";

export default function App() {
  return (
    <ScouterUIProvider>
      <Button onPress={() => alert("Hello!")}>Click Me</Button>
    </ScouterUIProvider>
  );
}
```

## Documentation

- [Component Documentation](./src/ui/)
- [Example App](./example/)

## Contributing

Contributions are welcome! Please open issues and pull requests for new features, bug fixes, or improvements.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

# ⚠ UNDER DEVELOPMENT