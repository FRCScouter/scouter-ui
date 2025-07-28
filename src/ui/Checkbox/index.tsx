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
import type React from "react";
import { useCallback, useMemo } from "react";
import { Pressable } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withSpring } from "react-native-reanimated";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import useResolveColor from "../../hooks/useResolveColor";
import useStateWithCallback from "../../hooks/useStateCallback";
import type { ScouterUIThemeColor } from "../../ScouterUi.types";
import Heading from "../Heading";
import { type ScouterFontWeightKey, type ScouterSizeKey, ScouterSizeMap } from "../ScouterDictionaries";
import Stack from "../Stack";

interface CheckboxLabelProps {
	checkboxLabel?: string;
	checkboxLabelColor?: ScouterUIThemeColor;
	checkboxLabelFontWeight?: ScouterFontWeightKey;
	checkboxLabelSize?: ScouterSizeKey;
}

interface CheckboxProps extends CheckboxLabelProps {
	disabled?: boolean;
	label?: string;
	size?: ScouterSizeKey;
	variant?: "outline" | "flat";
	color?: ScouterUIThemeColor;
	onPress: (isChecked: boolean) => void;
	useBuiltInState?: boolean;
	isChecked?: boolean;
	rounded?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
	disabled = false,
	onPress,
	size = "xl",
	color = "blue.500",
	variant = "flat",
	label = "checkbox-default",
	useBuiltInState = true,
	isChecked = false,
	rounded = "5px",
	checkboxLabel,
	checkboxLabelColor,
	checkboxLabelFontWeight,
	checkboxLabelSize,
}) => {
	const [checked, setChecked] = useStateWithCallback<boolean>(isChecked);
	const checkboxColor = useResolveColor(color);
	const checkboxSize = ScouterSizeMap[size];
	const iconSize = useMemo(() => Number.parseInt(checkboxSize, 10), [checkboxSize]);
	const iconScale = useSharedValue(1);
	const boxScale = useSharedValue(1);

	const animatedIconStyle = useAnimatedStyle(() => ({ transform: [{ scale: iconScale.value }] }));
	const animatedBoxStyle = useAnimatedStyle(() => ({ transform: [{ scale: boxScale.value }] }));

	const onCheckboxPress = useCallback(() => {
		if (useBuiltInState) {
			setChecked(!checked, (newCheckedValue) => {
				onPress?.(newCheckedValue);
				iconScale.value = withSequence(withSpring(1.2, { damping: 5 }), withSpring(1));
				boxScale.value = withSequence(withSpring(0.9, { damping: 5 }), withSpring(1.05, { damping: 5 }), withSpring(1));
			});
		}
	}, [onPress, useBuiltInState, checked, setChecked, boxScale, iconScale]);

	return (
		<Stack
			direction="row"
			gap="sm"
		>
			<Pressable
				onPress={onCheckboxPress}
				disabled={disabled}
				id="pressable"
				testID={label}
				accessibilityLabel={label}
				aria-checked={checked}
			>
				<Animated.View
					style={[
						css`
                        width: ${checkboxSize};
                        height: ${checkboxSize};
                        border-radius: ${rounded};
						border-width: 2px;
                        border-color: ${checkboxColor};
                        background-color: ${variant === "flat" ? (checked ? checkboxColor : "transparent") : "transparent"};
                        display: flex;
                        align-items: center;
                        justify-content: center;
            `,
						animatedBoxStyle,
					]}
				>
					{checked && (
						<Animated.View style={animatedIconStyle}>
							<FontAwesome6
								name="check"
								color={variant === "flat" ? "#fff" : checkboxColor}
								size={iconSize / 2}
							/>
						</Animated.View>
					)}
				</Animated.View>
			</Pressable>
			{checkboxLabel && (
				<Heading
					style={{ marginLeft: 10 }}
					color={checkboxLabelColor}
					size={checkboxLabelSize}
					weight={checkboxLabelFontWeight}
				>
					{checkboxLabel}
				</Heading>
			)}
		</Stack>
	);
};
export default Checkbox;
