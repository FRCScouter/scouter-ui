import { render } from "@testing-library/react-native"
import ScouterUIProvider from "../../ScouterUIProvider"
import Button from "../Button"
import ButtonGroup from "."

describe("ButtonGroup snapshot", () => {
    it("matches snapshot with props and styles", () => {
        const { toJSON } = render(
            <ScouterUIProvider>
                <ButtonGroup>
                    <Button variant="solid" color="red">
                        {"Hi"}
                    </Button>
                    <Button variant="solid" color="blue">
                        {"Hello"}
                    </Button>
                </ButtonGroup>
            </ScouterUIProvider>
        )

        expect(toJSON()).toMatchSnapshot();
    });
});