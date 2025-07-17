import { render } from "@testing-library/react-native";
import { act } from "react-test-renderer";
import ScouterUIProvider from "../../ScouterUIProvider";
import Alert from "./index";

describe("Alert", () => {
    it("renders correctly", async () => {
        await act(async () => {
            const { getByText } = render(
                <ScouterUIProvider>
                    <Alert alertRole="info" label="Hello" duration={5} onRemove={() => { }} />
                </ScouterUIProvider>,
            );
            expect(getByText("Hello")).toBeTruthy();
        });
    });
});
