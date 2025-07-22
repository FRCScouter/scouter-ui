import { useEffect, useState } from "react";
import { View } from "react-native";
import {
	ScouterAlert,
	ScouterButton,
	ScouterButtonGroup,
	ScouterCheckbox,
	ScouterCounter,
	ScouterDropdown,
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
	const [selectedDropdown, setSelectedDropdown] = useState<string | null>(null);
	const dropdownData = ["Option 1", "Option 2", "Option 3"];

	useEffect(() => {
		console.log(selectedDropdown)
	}, [selectedDropdown])

	return (
		<ScouterUIProvider>
			<View style={{ alignItems: "center", height: "100%", justifyContent: "center", padding: 10, width: "100%" }}>
				<ScouterDropdown
					data={dropdownData}
					onSelect={(item) => setSelectedDropdown(item)}
					defaultButtonText={selectedDropdown || "Select an option"}
					buttonStyle={{
						marginBottom: 20,
					}}
				/>
			</View>
		</ScouterUIProvider>
	);
};
export default App;
