import { render } from "@testing-library/react-native";

import Heading from "./index";
import ScouterUIProvider from "../../ScouterUIProvider";

describe("Heading Component", () => {
	it("renders with default props", () => {
		const { getByText } = render(
			<ScouterUIProvider>
				<Heading>Default Heading</Heading>
			</ScouterUIProvider>,
		);
		const heading = getByText("Default Heading");
		expect(heading).toBeTruthy();
	});

	it("renders with custom size and weight", () => {
		const { getByText } = render(
			<ScouterUIProvider>
				<Heading size="xl" weight="bold">
					Big Bold Text
				</Heading>
			</ScouterUIProvider>,
		);
		const heading = getByText("Big Bold Text");
		expect(heading).toBeTruthy();
	});

	it("applies correct font size and weight (emotion class check)", () => {
		const { toJSON } = render(
			<ScouterUIProvider>
				<Heading size="2xl" weight="black">
					Styled Text
				</Heading>
			</ScouterUIProvider>,
		);
		expect(toJSON()).toMatchSnapshot();
	});
});
