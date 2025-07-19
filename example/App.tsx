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
	ScouterUIProvider,
} from "scouter-ui";

const App = () => {
	const [showAlert, setShowAlert] = useState(true);
	const [text, setText] = useState<string | number>("Hello");
	return (
		<ScouterUIProvider>
			<View style={{ alignItems: "center", height: "100%", justifyContent: "center", padding: 10, width: "100%" }}>
				<ScouterButton color="blue" onPress={() => console.log("hello")}>
					Press me
				</ScouterButton>
				<ScouterHeading color="black.0" size="2xl">
					Hello?
				</ScouterHeading>
				<ScouterButtonGroup>
					<ScouterButton color="blue" onPress={() => console.log("hello")}>
						Press me
					</ScouterButton>
					<ScouterButton color="blue" onPress={() => console.log("hello")}>
						Press me
					</ScouterButton>
					<ScouterButton color="blue" onPress={() => console.log("hello")}>
						Press me
					</ScouterButton>
				</ScouterButtonGroup>
				{showAlert && (
					<ScouterAlert
						label="This is info to check!"
						alertRole="success"
						duration={5300}
						onRemove={() => setShowAlert(false)}
					/>
				)}
				<ScouterInput onTextChange={(value) => setText(value)} label="Email" value={text} helper="Hello world" />
				<ScouterCheckbox color="blue.500" size="3xl" rounded="100%" onPress={(val) => console.log(val)} variant="outline" checkboxLabel="Hello" checkboxLabelColor="black.50" />
				<View style={{ height: 20 }} />
				<ScouterRadioButton onPress={(val) => console.log(val)} size="2xl" radioButtonLabel="Test" />
			</View>
		</ScouterUIProvider>
	);
};
export default App;
