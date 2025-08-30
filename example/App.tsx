import { useEvent } from 'expo';
import {
  ScouterButton, ScouterUIProvider, ScouterInput
} from 'scouter-ui';
import { SafeAreaView, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{
      flex: 1,
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    }} >
      <ScouterUIProvider>
        <View style={{ width: "90%" }}>
          <ScouterInput
            autoCapitalize="none"
            textFieldStyleOptions={{ placeholderColor: "gray.300", textColor: "white.50" }}
            textFieldToggleOptions={{ passwordToggleSize: 20 }}
            inputMode="email"
            placeholder="Enter your email"
            value='Hello'
          />
          <ScouterInput
            autoCapitalize="none"
            textFieldStyleOptions={{ placeholderColor: "gray.300", textColor: "white.50" }}
            textFieldToggleOptions={{ passwordToggleSize: 20 }}
            inputMode="email"
            placeholder="Enter your email"
            value='Hello'
            isPassword
          />
          <ScouterButton radius={15}>Hello!</ScouterButton>
        </View>
      </ScouterUIProvider>
    </SafeAreaView >
  );
}

