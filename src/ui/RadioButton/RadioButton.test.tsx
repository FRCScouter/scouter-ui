import { render } from "@testing-library/react-native";
import ScouterUIProvider from "../../ScouterUIProvider";
import RadioButton from ".";

describe("RadioButton component", () => {
	it("Renders correctly", () => {
		const onPress = jest.fn();
		const { getByTestId } = render(
			<ScouterUIProvider>
				<RadioButton onPress={onPress} />
			</ScouterUIProvider>,
		);

		const button = getByTestId("radio-button-default");
		expect(button.props.accessibilityState?.checked).toBe(false);
	});
});
