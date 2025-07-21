import { useState } from "react";
import { View } from "react-native";
import {
	ScouterAlert,
	ScouterButton,
	ScouterButtonGroup,
	ScouterCheckbox,
	ScouterCounter,
	ScouterHeading,
	ScouterInput,
	ScouterRadioButton,
	ScouterStack,
	ScouterUIProvider,
} from "scouter-ui";
import Button from "scouter-ui/ui/Button";
import ButtonGroup from "scouter-ui/ui/ButtonGroup";

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
				<ScouterButtonGroup style={{ marginTop: 10 }} direction="row">
					<Button>Hello</Button>
					<Button>Hello</Button>
					<Button>Hello</Button>
				</ScouterButtonGroup>
				<ScouterRadioButton size="3xl" radioButtonLabel="Press me please" />
				<ScouterCheckbox onPress={() => console.log("I was pressed")} checkboxLabel="Hello" />
				<ScouterCounter />
			</View>
		</ScouterUIProvider>
	);
};
export default App;
