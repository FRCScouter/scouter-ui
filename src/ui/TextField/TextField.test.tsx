import { fireEvent, render } from "@testing-library/react-native";
import React from "react";
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
                    onTextChange={() => { }}
                    helper="We'll never share your email."
                />
            </ScouterUIProvider>,
        );
        expect(getByText("Email*")).toBeTruthy();
        expect(getByPlaceholderText("Enter your email")).toBeTruthy();
        expect(getByText("We'll never share your email.")).toBeTruthy();
    });

    it("renders error and error icon if error is provided", () => {
        const { getByText, getByTestId } = render(
            <ScouterUIProvider>
                <TextField label="Password" value="" onTextChange={() => { }} error="Password is required" />
            </ScouterUIProvider>,
        );
        expect(getByText("Password")).toBeTruthy();
        expect(getByText("Password is required")).toBeTruthy();
    });

    it("calls onTextChange when input changes", () => {
        const onTextChange = jest.fn();
        const { getByPlaceholderText } = render(
            <ScouterUIProvider>
                <TextField placeholder="Type here" value="" onTextChange={onTextChange} />
            </ScouterUIProvider>,
        );
        fireEvent.changeText(getByPlaceholderText("Type here"), "hello");
        expect(onTextChange).toHaveBeenCalledWith("hello");
    });

    it("renders as disabled when disabled prop is true", () => {
        const { getByPlaceholderText } = render(
            <ScouterUIProvider>
                <TextField placeholder="Disabled input" value="" onTextChange={() => { }} disabled />
            </ScouterUIProvider>,
        );
        const input = getByPlaceholderText("Disabled input");
        expect(input.props.editable).toBe(false);
    });
});
