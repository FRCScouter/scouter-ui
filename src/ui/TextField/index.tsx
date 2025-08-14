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
import { useState } from "react";

import type { TextInputProps } from "react-native";
import useResolveColor from "../../hooks/useResolveColor";
import type { ScouterUIThemeColor } from "../../ScouterUi.types";
import type { ScouterSizeKey } from "../ScouterDictionaries";
import TextFieldError from "./TextFieldError";
import TextFieldHelper from "./TextFieldHelper";
import TextFieldLabel from "./TextFieldLabel";

type TextFieldStyleOptionsType = {
	backgroundColor?: ScouterUIThemeColor;
	borderColor?: ScouterUIThemeColor;
	activeBorderColor?: ScouterUIThemeColor;
	placeholderColor?: ScouterUIThemeColor;
};

interface TextFieldProps extends TextInputProps {
	label?: string;
	textFieldStyleOptions?: TextFieldStyleOptionsType;
	labelSize?: ScouterSizeKey;
	required?: boolean;
	placeholder?: string;
	onChangeText?: (value: string) => void;
	value?: string;
	helper?: string;
	error?: string;
	disabled?: boolean;
}

const TextField: React.FC<TextFieldProps> = ({
	label,
	textFieldStyleOptions = {},
	labelSize = "md",
	required = false,
	placeholder = "",
	onChangeText,
	value = "",
	helper,
	error,
	disabled = false,
	onFocus: onFocusProp,
	onBlur: onBlurProp,
	...rest
}) => {
	const theme = useTheme();
	const hasError = Boolean(error);
	const [isFocused, setIsFocused] = useState(false);

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

	const defaultBorder = theme.colors.gray[300];
	const errorBorder = theme.colors.red[500];
	const disabledBorder = theme.colors.gray[200];
	const defaultActive = theme.colors.blue[500];

	const inactiveBorderColor = hasError
		? errorBorder
		: disabled
			? disabledBorder
			: useResolveColor(textFieldStyleOptions.borderColor, defaultBorder);
	const activeBorderColor = useResolveColor(textFieldStyleOptions.activeBorderColor, defaultActive);
	const computedBorderColor = isFocused ? activeBorderColor : inactiveBorderColor;
	const backgroundColor = useResolveColor(
		textFieldStyleOptions.backgroundColor,
		disabled ? theme.colors.gray[100] : theme.colors.white[50],
	);
	const textColor = disabled ? theme.colors.gray[400] : theme.colors.gray[900];
	const placeholderTextColor = useResolveColor(textFieldStyleOptions.placeholderColor, theme.colors.gray[400]);

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
				onChangeText={onChangeText}
				value={value}
				editable={!disabled}
				hasError={hasError}
				disabled={disabled}
				focusBorderColor={activeBorderColor}
				placeholderTextColor={placeholderTextColor}
				onFocus={(e) => {
					setIsFocused(true);
					onFocusProp?.(e);
				}}
				onBlur={(e) => {
					setIsFocused(false);
					onBlurProp?.(e);
				}}
				style={[
					shadowStyle,
					{
						backgroundColor,
						borderColor: computedBorderColor,
						color: textColor,
					},
				]}
				{...rest}
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
	hasError: boolean;
	disabled: boolean;
	focusBorderColor: string;
}>`
	width: 100%;
	padding-vertical: 12px;
	padding-horizontal: 16px;
	border-radius: 10px;
	border-width: 2px;
	font-size: 16px;
	margin-top: 6px;
	margin-bottom: 6px;

	&:focus {
		border-color: ${(props) => props.focusBorderColor};
	}
`;

export default TextField;
export { TextFieldError, TextFieldHelper, TextFieldLabel };
