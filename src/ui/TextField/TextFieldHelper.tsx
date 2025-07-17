import type { HeadingSizeKey } from "../Heading";
import Heading from "../Heading";

interface TextFieldHelperProps {
    children: React.ReactNode;
    labelSize: HeadingSizeKey;
}

const TextFieldHelper: React.FC<TextFieldHelperProps> = ({ children, labelSize }) => {
    return <Heading size={labelSize} color={"gray.500"}>{children}</Heading>;
};

export default TextFieldHelper;
