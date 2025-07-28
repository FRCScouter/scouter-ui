import { useEvent } from 'expo';
import {
  ScouterButton, ScouterUIProvider
} from 'scouter-ui';
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView >
      <ScouterUIProvider>
        <ScouterButton>Hello!</ScouterButton>
      </ScouterUIProvider>
    </SafeAreaView>
  );
}
