import styled from "@emotion/native";
import { useTheme } from "@emotion/react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import type { UITheme } from "../../ScouterUi.types";
import type { HeadingSizeKey } from "../Heading";
import Heading from "../Heading";

interface TextFieldErrorProps {
    children: React.ReactNode;
    labelSize: HeadingSizeKey;
}

const TextFieldError: React.FC<TextFieldErrorProps> = ({ children, labelSize }) => {
    const theme = useTheme() as UITheme;
    return (
        <Container>
            <MaterialIcons name="dangerous" size={18} color={theme.colors.red[500]} />
            <Heading size={labelSize} weight="medium" color={"red.500"}>
                {children}
            </Heading>
        </Container>
    );
};

const Container = styled.View`
    display: flex;
    flex-direction: row;
`;

export default TextFieldError;
