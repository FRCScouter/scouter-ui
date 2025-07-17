import type { UITheme } from "../../ScouterUi.types";
import Heading, { type HeadingSizeKey } from "../Heading";

interface TextFieldLabelProps {
    children: React.ReactNode;
    labelSize: HeadingSizeKey;
    color: `${keyof UITheme["colors"]}.${number}`;
}
const TextFieldLabel: React.FC<TextFieldLabelProps> = ({ children, color, labelSize }) => {
    return <Heading size={labelSize} weight="bold" color={color}>{children}</Heading>;
};

export default TextFieldLabel;
