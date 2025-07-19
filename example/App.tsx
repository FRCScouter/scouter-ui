import { useState } from "react";
import { View } from "react-native";
import {
	ScouterAlert,
	ScouterButton,
	ScouterButtonGroup,
	ScouterCheckbox,
	ScouterHeading,
	ScouterInput,
	ScouterRadioButton,
	ScouterStack,
	ScouterUIProvider,
} from "scouter-ui";
import Button from "scouter-ui/ui/Button";

const App = () => {
	const [showAlert, setShowAlert] = useState(true);
	const [text, setText] = useState<string | number>("Hello");
	return (
		<ScouterUIProvider>
			<View style={{ alignItems: "center", height: "100%", justifyContent: "center", padding: 10, width: "100%" }}>
				<ScouterStack gap="md">
					<Button>Hello</Button>
					<Button>Hello</Button>
					<Button>Hello</Button>
				</ScouterStack>
			</View>
		</ScouterUIProvider>
	);
};
export default App;
