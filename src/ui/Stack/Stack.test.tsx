import { render } from "@testing-library/react-native";
import ScouterUIProvider from "../../ScouterUIProvider";
import Button from "../Button";
import Stack from ".";

describe("Stack component rendering test", () => {
    it("Should add marginLeft to second button", () => {
        const { UNSAFE_getAllByType } = render(
            <ScouterUIProvider>
                <Stack gap="xs">
                    <Button>FirstBtn</Button>
                    <Button>SecondBtn</Button>
                    <Button>ThirdBtn</Button>
                </Stack>
            </ScouterUIProvider>,
        );

        const buttons = UNSAFE_getAllByType(Button);
        expect(buttons[1].props.style[0].marginLeft).toBe(12)
    });
});
