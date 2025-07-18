import { useState } from "react";
import { View } from "react-native";
import {
	ScouterAlert,
	ScouterButton,
	ScouterButtonGroup,
	ScouterCheckbox,
	ScouterHeading,
	ScouterInput,
	ScouterUIProvider,
} from "scouter-ui";

const App = () => {
	const [showAlert, setShowAlert] = useState(true);
	const [text, setText] = useState<string | number>("Hello");
	return (
		<ScouterUIProvider>
			<View style={{ alignItems: "center", height: "100%", justifyContent: "center", padding: 10, width: "100%" }}>
				<ScouterButton color="red" onPress={() => console.log("hello")}>
					Press me
				</ScouterButton>
				<ScouterHeading color="black.0" size="3xl">
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
						alertRole="warning"
						duration={5300}
						onRemove={() => setShowAlert(false)}
					/>
				)}
				<ScouterInput onTextChange={(value) => setText(value)} label="Email" value={text} helper="Hello world" />
				<ScouterCheckbox color="blue.500" size="3xl" rounded="100%" onPress={() => null} variant="outline" />
			</View>
		</ScouterUIProvider>
	);
};
export default App;
