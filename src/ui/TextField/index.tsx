/**
 * Copyright 2025 Lior Shaposhnikov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import styled from "@emotion/native";
import { useTheme } from "@emotion/react";
import type React from "react";
import type { UITheme } from "../../ScouterUi.types";
import TextFieldError from "./TextFieldError";
import TextFieldHelper from "./TextFieldHelper";
import TextFieldLabel from "./TextFieldLabel";

interface TextFieldProps {
	label?: string;
	labelSize?: "sm" | "md" | "lg";
	required?: boolean;
	placeholder?: string;
	onTextChange: (value: string | number) => void;
	value: string | number;
	helper?: string;
	error?: string;
	disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
	label,
	labelSize = "md",
	required = false,
	placeholder = "",
	onTextChange,
	value = "",
	helper,
	error,
	disabled = false,
}) => {
	const theme = useTheme() as UITheme;
	const hasError = Boolean(error);

	// Shadow style for React Native
	const shadowStyle = !disabled
		? {
				elevation: 2,
				shadowColor: "#101e36",
				shadowOffset: { height: 1, width: 0 },
				shadowOpacity: 0.08,
				shadowRadius: 2,
			}
		: {};

	return (
		<FieldContainer>
			{label && (
				<TextFieldLabel
					labelSize={labelSize}
					color={hasError ? "red.600" : "gray.700"}
				>
					{label}
					{required && <RequiredMark>*</RequiredMark>}
				</TextFieldLabel>
			)}
			<StyledTextInput
				placeholder={placeholder}
				onChangeText={onTextChange}
				value={value?.toString()}
				editable={!disabled}
				theme={theme}
				hasError={hasError}
				disabled={disabled}
				placeholderTextColor={theme.colors.gray[400]}
				style={shadowStyle}
			/>
			{helper && <TextFieldHelper labelSize="sm">{helper}</TextFieldHelper>}
			{error && <TextFieldError labelSize="sm">{error}</TextFieldError>}
		</FieldContainer>
	);
};

const FieldContainer = styled.View`
    width: 100%;
    margin-bottom: 18px;
`;

const RequiredMark = styled.Text`
    color: #e53e3e;
    margin-left: 2px;
`;

const StyledTextInput = styled.TextInput<{
	theme: UITheme;
	hasError: boolean;
	disabled: boolean;
}>`
    width: 100%;
    padding-vertical: 12px;
    padding-horizontal: 16px;
    border-radius: 10px;
    border-width: 2px;
    border-color: ${(props) => (props.hasError ? props.theme.colors.red[500] : props.disabled ? props.theme.colors.gray[200] : props.theme.colors.gray[300])};
    background-color: ${(props) => (props.disabled ? props.theme.colors.gray[100] : props.theme.colors.white[50])};
    color: ${(props) => (props.disabled ? props.theme.colors.gray[400] : props.theme.colors.gray[900])};
    font-size: 16px;
    margin-top: 6px;
    margin-bottom: 6px;

    /* Focused state (React Native doesn't have :focus, so this is for web only) */
    &:focus {
        border-color: ${(props) => (props.hasError ? props.theme.colors.red[600] : props.theme.colors.blue[500])};
    }
`;

export default TextField;
export { TextFieldError, TextFieldHelper, TextFieldLabel };
