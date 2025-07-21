/**
 * Copyright 2025 Lior Shaposhnikov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** biome-ignore-all lint/suspicious/noExplicitAny: <Test> */

import { fireEvent, render } from "@testing-library/react-native";
import ScouterUIProvider from "../../ScouterUIProvider";
import Button from "../Button";
import ButtonGroup from ".";

function findStyleWithKey(styles: any, key: string) {
	return (Array.isArray(styles) ? styles : [styles]).find((s: any) => s && s[key] !== undefined);
}

it("renders buttons with correct labels", () => {
	const { getByText } = render(
		<ScouterUIProvider>
			<ButtonGroup>
				<Button
					variant="solid"
					color="blue.500"
				>
					Hi
				</Button>
				<Button
					variant="solid"
					color="blue.500"
				>
					Hello
				</Button>
			</ButtonGroup>
		</ScouterUIProvider>,
	);

	expect(getByText("Hi")).toBeTruthy();
	expect(getByText("Hello")).toBeTruthy();
});

it("calls onPress for each button individually", () => {
	const onPress1 = jest.fn();
	const onPress2 = jest.fn();
	const { getByText } = render(
		<ScouterUIProvider>
			<ButtonGroup>
				<Button
					variant="solid"
					color="blue.500"
					onPress={onPress1}
				>
					Hi
				</Button>
				<Button
					variant="solid"
					color="blue.500"
					onPress={onPress2}
				>
					Hello
				</Button>
			</ButtonGroup>
		</ScouterUIProvider>,
	);
	fireEvent.press(getByText("Hi"));
	expect(onPress1).toHaveBeenCalled();
	expect(onPress2).not.toHaveBeenCalled();
	fireEvent.press(getByText("Hello"));
	expect(onPress2).toHaveBeenCalled();
});

it("renders disabled buttons correctly", () => {
	const onPress = jest.fn();
	const { getByText } = render(
		<ScouterUIProvider>
			<ButtonGroup>
				<Button
					variant="solid"
					color="blue.500"
					disabled
					onPress={onPress}
				>
					Disabled
				</Button>
				<Button
					variant="solid"
					color="blue.500"
					onPress={onPress}
				>
					Enabled
				</Button>
			</ButtonGroup>
		</ScouterUIProvider>,
	);
	fireEvent.press(getByText("Disabled"));
	expect(onPress).not.toHaveBeenCalled();
	fireEvent.press(getByText("Enabled"));
	expect(onPress).toHaveBeenCalled();
});

it("applies border radius to first and last buttons", () => {
	const { UNSAFE_getAllByType } = render(
		<ScouterUIProvider>
			<ButtonGroup>
				<Button
					variant="solid"
					color="blue.500"
				>
					First
				</Button>
				<Button
					variant="solid"
					color="blue.500"
				>
					Middle
				</Button>
				<Button
					variant="solid"
					color="blue.500"
				>
					Last
				</Button>
			</ButtonGroup>
		</ScouterUIProvider>,
	);
	// Get all Button components
	const buttons = UNSAFE_getAllByType(Button);
	// Check style prop for border radius
	const firstStyle = findStyleWithKey(buttons[0].props.style[0][1], "borderTopLeftRadius");
	const lastStyle = findStyleWithKey(buttons[2].props.style[0][1], "borderTopRightRadius");
	expect(firstStyle.borderTopLeftRadius).toBe(15);
	expect(firstStyle.borderBottomLeftRadius).toBe(15);
	expect(lastStyle.borderTopRightRadius).toBe(15);
	expect(lastStyle.borderBottomRightRadius).toBe(15);
});

it("ignores null and undefined children", () => {
	const { getByText, queryByText } = render(
		<ScouterUIProvider>
			<ButtonGroup>
				<Button
					variant="solid"
					color="blue.500"
				>
					A
				</Button>
				<Button
					variant="solid"
					color="blue.500"
				>
					B
				</Button>
			</ButtonGroup>
		</ScouterUIProvider>,
	);
	expect(getByText("A")).toBeTruthy();
	expect(getByText("B")).toBeTruthy();
	expect(queryByText("null")).toBeNull();
	expect(queryByText("undefined")).toBeNull();
});
