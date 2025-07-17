import { render } from "@testing-library/react-native";
import { Text } from "react-native";
import ScouterStack from ".";

describe("ScouterStack", () => {
    it("renders children and applies row direction and gap", () => {
        const { toJSON } = render(
            <ScouterStack direction="row" gap={10}>
                <Text>Hello</Text>
                <Text>HI</Text>
            </ScouterStack>,
        );

        expect(toJSON()).toMatchSnapshot()
    });
});
