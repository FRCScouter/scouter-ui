import { render } from "@testing-library/react-native";
import ScouterUIProvider from "../../ScouterUIProvider";
import Button from "./index";


describe("Button", () => {
    it("renders correctly", () => {
        const { getByText } = render(
            <ScouterUIProvider>
                <Button>Hello</Button>
            </ScouterUIProvider>,
        );
        expect(getByText("Hello")).toBeTruthy();
    });
});
