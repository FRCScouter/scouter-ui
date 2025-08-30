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

import { css } from "@emotion/native";
import { useCallback } from "react";
import { Pressable } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withSpring } from "react-native-reanimated";
import useResolveColor from "../hooks/useResolveColor";
import useStateWithCallback from "../hooks/useStateCallback";
import type { ScouterUIThemeColor } from "../ScouterUi.types";
import Heading from "./heading";
import { type ScouterFontWeightKey, type ScouterSizeKey, ScouterSizeMap } from "./scouterDictionary";
import Stack from "./stack";

interface RadioButtonLabelProps {
	radioButtonLabel?: string;
	radioButtonLabelColor?: ScouterUIThemeColor;
	radioButtonLabelSize?: ScouterSizeKey;
	radioButtonLabelWeight?: ScouterFontWeightKey;
}

interface RadioButtonProps extends RadioButtonLabelProps {
	onPress?: (newState: boolean) => void;
	color?: ScouterUIThemeColor;
	isChecked?: boolean;
	label?: string;
	disabled?: boolean;
	size?: ScouterSizeKey;
}

const RadioButton: React.FC<RadioButtonProps> = ({
	radioButtonLabel,
	radioButtonLabelColor,
	radioButtonLabelSize,
	radioButtonLabelWeight,
	onPress,
	color = "blue.500",
	isChecked = false,
	label = "radio-button-default",
	disabled = false,
	size = "lg",
}) => {
	const [checked, setChecked] = useStateWithCallback<boolean>(isChecked);
	const radioButtonScale = useSharedValue(1);
	const innerRadioButtonScale = useSharedValue(1);

	const radioButtonColor = useResolveColor(color);
	const radioButtonSize = ScouterSizeMap[size];

	const animatedRadioButtonStyle = useAnimatedStyle(() => ({
		transform: [{ scale: radioButtonScale.value }],
	}));
	const animatedInnerRadioButtonStyle = useAnimatedStyle(() => ({
		transform: [{ scale: innerRadioButtonScale.value }],
	}));

	const onRadioButtonPress = useCallback(() => {
		setChecked(!checked, (newValue) => {
			onPress?.(newValue);
			radioButtonScale.value = withSequence(
				withSpring(0.9, { damping: 5 }),
				withSpring(1.05, { damping: 5 }),
				withSpring(1),
			);
			innerRadioButtonScale.value = withSequence(
				withSpring(0.9, { damping: 5 }),
				withSpring(1.05, { damping: 5 }),
				withSpring(1),
			);
		});
	}, [onPress, setChecked, checked, radioButtonScale, innerRadioButtonScale]);

	return (
		<Stack
			direction="row"
			gap="sm"
		>
			<Pressable
				onPress={onRadioButtonPress}
				disabled={disabled}
				testID={label}
				aria-checked={checked}
				accessibilityLabel={label}
			>
				<Animated.View
					style={[
						animatedRadioButtonStyle,
						css`
                            width: ${radioButtonSize};
                            height: ${radioButtonSize};
                            border-radius: 100%;
                            border-width: 2px;
                            border-color: ${radioButtonColor};
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        `,
					]}
				>
					{checked && (
						<Animated.View
							style={[
								css`
                                height: 70%;
                                width: 70%;
                                border-radius: 100%;
                                background-color: ${radioButtonColor};
                            `,
								animatedInnerRadioButtonStyle,
							]}
						/>
					)}
				</Animated.View>
			</Pressable>
			{radioButtonLabel && (
				<Heading
					style={{ marginLeft: 10 }}
					color={radioButtonLabelColor}
					size={radioButtonLabelSize}
					weight={radioButtonLabelWeight}
				>
					{radioButtonLabel}
				</Heading>
			)}
		</Stack>
	);
};
export default RadioButton;
