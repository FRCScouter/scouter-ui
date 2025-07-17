import { fireEvent, render } from "@testing-library/react-native";
import ScouterUITheme from "../../ScouterUITheme";
import { Checkbox } from ".";

// Mock react-native-vector-icons/Icon (if used)
// jest.mock("react-native-vector-icons/Icon", () => {
//     return {
//         __esModule: true,
//         default: () => null,
//     };
// });

describe("Checkbox", () => {
    it("renders unchecked by default", () => {
        const { toJSON } = render(<Checkbox theme={ScouterUITheme} />);
        expect(toJSON()).toMatchSnapshot();
    });

    it("renders as checked when checked=true", () => {
        const { toJSON } = render(<Checkbox checked theme={ScouterUITheme} />);
        expect(toJSON()).toMatchSnapshot();
    });

    it("calls onChange with correct value when pressed", () => {
        const onChange = jest.fn();
        const { getByRole } = render(<Checkbox checked={false} onChange={onChange} theme={ScouterUITheme} />);
        fireEvent.press(getByRole("button"));
        expect(onChange).toHaveBeenCalledWith(true);
    });

    it("calls onChange with false when checked and pressed", () => {
        const onChange = jest.fn();
        const { getByRole } = render(<Checkbox checked={true} onChange={onChange} theme={ScouterUITheme} />);
        fireEvent.press(getByRole("button"));
        expect(onChange).toHaveBeenCalledWith(false);
    });

    it("renders with a custom color", () => {
        const { toJSON } = render(<Checkbox checked color="blue.600" theme={ScouterUITheme} />);
        expect(toJSON()).toMatchSnapshot();
    });

    it("renders with a custom icon", () => {
        const CustomIcon = () => <>{"custom"}</>;
        const { getByText } = render(<Checkbox checked checkIcon={<CustomIcon />} theme={ScouterUITheme} />);
        expect(getByText("custom")).toBeTruthy();
    });

    it("renders without icon when disableIcon is true", () => {
        const { toJSON } = render(<Checkbox checked disableIcon theme={ScouterUITheme} />);
        expect(toJSON()).toMatchSnapshot();
    });

    it("renders with custom size", () => {
        const { toJSON } = render(<Checkbox checked size={32} theme={ScouterUITheme} />);
        expect(toJSON()).toMatchSnapshot();
    });
});
