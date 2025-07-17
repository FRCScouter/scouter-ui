import { useState } from "react";
import { View } from "react-native";
import { ScouterUIProvider } from "scouter-ui";
import { ScouterAlert, ScouterButton, ScouterButtonGroup, ScouterHeading } from "scouter-ui/ui";
import Checkbox from "scouter-ui/ui/Checkbox";
import TextField from "scouter-ui/ui/TextField";

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
				<TextField onTextChange={(value) => setText(value)} label="Email" value={text} helper="Hello world" />
				<Checkbox color="blue.400" />
			</View>
		</ScouterUIProvider>
	);
};
export default App;
