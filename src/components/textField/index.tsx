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
import { Feather } from "@expo/vector-icons";
import { useCallback, useState } from "react";

import type { TextInputProps } from "react-native";
import useResolveColor from "../../hooks/useResolveColor";
import type { ScouterUIThemeColor } from "../../ScouterUi.types";
import { ScouterStack } from "..";
import type { ScouterSizeKey } from "../scouterDictionary";
import TextFieldError, { type TextFieldErrorProps } from "./textFieldError";
import TextFieldHelper, { type TextFieldHelperProps } from "./textFieldHelper";
import TextFieldLabel from "./textFieldLabel";

type TextFieldStyleOptionsType = {
	backgroundColor?: ScouterUIThemeColor;
	borderColor?: ScouterUIThemeColor;
	activeBorderColor?: ScouterUIThemeColor;
	placeholderColor?: ScouterUIThemeColor;
	textColor?: ScouterUIThemeColor;
};

type TextFieldToggleOptionsType = {
	passwordToggleColor?: ScouterUIThemeColor;
	passwordToggleSize?: number;
};

type TextFieldHelperOptionsType = Omit<TextFieldHelperProps, "children">;
type TextFieldErrorOptionsType = Omit<TextFieldErrorProps, "children">;
interface TextFieldProps extends TextInputProps {
	label?: string;
	textFieldStyleOptions?: TextFieldStyleOptionsType;
	textFieldHelperOptions?: TextFieldHelperOptionsType;
	textFieldErrorOptions?: TextFieldErrorOptionsType;
	textFieldToggleOptions?: TextFieldToggleOptionsType;
	labelSize?: ScouterSizeKey;
	required?: boolean;
	placeholder?: string;
	onChangeText?: (value: string) => void;
	value?: string;
	helper?: string;
	error?: string;
	disabled?: boolean;
	isPassword?: boolean;
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
	isPassword = false,
	textFieldHelperOptions = {},
	textFieldErrorOptions = {},
	textFieldToggleOptions = {
		passwordToggleColor: "gray.500",
		passwordToggleSize: 12,
	},
	...rest
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [isSecureEntry, setSecureEntry] = useState(isPassword);
	const theme = useTheme();

	const isErrorPresent = Boolean(error);

	const defaultBorderColor = theme.colors.gray[300];
	const errorBorderColor = theme.colors.red[500];
	const disabledBorderColor = theme.colors.gray[200];
	const defaultActiveBorderColor = theme.colors.blue[500];

	const resolvedBorderColor = useResolveColor(textFieldStyleOptions.borderColor, defaultBorderColor);
	const resolvedActiveBorderColor = useResolveColor(textFieldStyleOptions.activeBorderColor, defaultActiveBorderColor);
	const resolvedBackgroundColor = useResolveColor(
		textFieldStyleOptions.backgroundColor,
		disabled ? theme.colors.gray[100] : theme.colors.white[50],
	);
	const resolvedPasswordToggleColor = useResolveColor(textFieldToggleOptions.passwordToggleColor);
	const resolvedTextColor = useResolveColor(textFieldStyleOptions.textColor, theme.colors.gray[900]);
	const resolvedPlaceholderColor = useResolveColor(textFieldStyleOptions.placeholderColor, theme.colors.gray[400]);
	const inactiveBorderColor = isErrorPresent ? errorBorderColor : disabled ? disabledBorderColor : resolvedBorderColor;
	const activeBorderColor = resolvedActiveBorderColor;
	const finalBorderColor = isFocused ? activeBorderColor : inactiveBorderColor;
	const finalTextColor = disabled ? theme.colors.gray[400] : resolvedTextColor;
	const inputShadowStyle = !disabled
		? {
				elevation: 2,
				shadowColor: "#101e36",
				shadowOffset: { height: 1, width: 0 },
				shadowOpacity: 0.08,
				shadowRadius: 2,
			}
		: {};

	const togglePasswordVisibility = useCallback(() => {
		setSecureEntry((prev) => !prev);
	}, []);

	return (
		<FieldContainer>
			{label && (
				<TextFieldLabel
					labelSize={labelSize}
					color={isErrorPresent ? "red.600" : "gray.700"}
				>
					{label}
					{required && <RequiredMark>*</RequiredMark>}
				</TextFieldLabel>
			)}

			<ScouterStack direction="row">
				<StyledTextInput
					placeholder={placeholder}
					onChangeText={onChangeText}
					value={value}
					editable={!disabled}
					hasError={isErrorPresent}
					disabled={disabled}
					secureTextEntry={isSecureEntry}
					focusBorderColor={activeBorderColor}
					placeholderTextColor={resolvedPlaceholderColor}
					onFocus={(e) => {
						setIsFocused(true);
						onFocusProp?.(e);
					}}
					onBlur={(e) => {
						setIsFocused(false);
						onBlurProp?.(e);
					}}
					style={[
						inputShadowStyle,
						{
							backgroundColor: resolvedBackgroundColor,
							borderColor: finalBorderColor,
							color: finalTextColor,
						},
					]}
					{...rest}
				/>

				{isPassword && (
					<Feather
						name={isSecureEntry ? "eye" : "eye-off"}
						onPress={togglePasswordVisibility}
						color={resolvedPasswordToggleColor}
						size={textFieldToggleOptions.passwordToggleSize}
						style={{
							position: "absolute",
							right: 10,
						}}
					/>
				)}
			</ScouterStack>

			{helper && <TextFieldHelper {...textFieldHelperOptions}>{helper}</TextFieldHelper>}
			{error && <TextFieldError {...textFieldStyleOptions}>{error}</TextFieldError>}
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
