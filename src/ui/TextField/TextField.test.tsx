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

import { fireEvent, render, waitFor } from "@testing-library/react-native";
import ScouterUIProvider from "../../ScouterUIProvider";
import TextField from ".";

describe("TextField", () => {
	it("renders with label, required, helper, and value", () => {
		const { getByText, getByPlaceholderText } = render(
			<ScouterUIProvider>
				<TextField
					label="Email"
					required
					placeholder="Enter your email"
					value=""
					onChangeText={() => {}}
					helper="We'll never share your email."
				/>
			</ScouterUIProvider>,
		);
		expect(getByText("Email*")).toBeTruthy();
		expect(getByPlaceholderText("Enter your email")).toBeTruthy();
		expect(getByText("We'll never share your email.")).toBeTruthy();
	});

	it("renders error and error icon if error is provided", async () => {
		const { getByText } = render(
			<ScouterUIProvider>
				<TextField
					label="Password"
					value=""
					onChangeText={() => {}}
					error="Password is required"
				/>
			</ScouterUIProvider>,
		);
		await waitFor(() => {
			expect(getByText("Password")).toBeTruthy();
			expect(getByText("Password is required")).toBeTruthy();
		});
	});

	it("calls onTextChange when input changes", () => {
		const onTextChange = jest.fn();
		const { getByPlaceholderText } = render(
			<ScouterUIProvider>
				<TextField
					placeholder="Type here"
					value=""
					onChangeText={onTextChange}
				/>
			</ScouterUIProvider>,
		);
		fireEvent.changeText(getByPlaceholderText("Type here"), "hello");
		expect(onTextChange).toHaveBeenCalledWith("hello");
	});

	it("renders as disabled when disabled prop is true", () => {
		const { getByPlaceholderText } = render(
			<ScouterUIProvider>
				<TextField
					placeholder="Disabled input"
					value=""
					onChangeText={() => {}}
					disabled
				/>
			</ScouterUIProvider>,
		);
		const input = getByPlaceholderText("Disabled input");
		expect(input.props.editable).toBe(false);
	});
});
