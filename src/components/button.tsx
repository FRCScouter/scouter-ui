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
import { Pressable, type PressableProps, type StyleProp, type ViewStyle } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import useResolveColor from "../hooks/useResolveColor";
import type { ScouterUIThemeColor } from "../ScouterUi.types";
import Heading from "./heading";
import type { ScouterFontWeightKey, ScouterSizeKey } from "./scouterDictionary";
import Stack from "./stack";

interface ButtonLabelProps {
	buttonLabelWeight?: ScouterFontWeightKey;
	buttonLabelColor?: ScouterUIThemeColor;
	buttonLabelSize?: ScouterSizeKey;
}

export interface ButtonProps extends ButtonLabelProps, PressableProps {
	Icon?: React.ReactElement;
	color?: ScouterUIThemeColor;
	children?: React.ReactNode;
	style?: StyleProp<ViewStyle>;
	variant?: "solid" | "outline";
	radius?: string;
	disabled?: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const Button: React.FC<ButtonProps> = (props) => {
	const {
		color = "blue.500",
		children,
		style,
		variant = "solid",
		disabled = false,
		buttonLabelColor,
		buttonLabelSize,
		buttonLabelWeight,
		radius = "12",
		Icon,
		...rest
	} = props;

	const resolvedColor = useResolveColor(color);
	const backgroundColor = variant === "solid" ? (disabled ? "#ccc" : resolvedColor) : "transparent";
	const borderColor = variant === "outline" ? (disabled ? "#aaa" : resolvedColor) : "transparent";
	const textColor = buttonLabelColor || "white.50";
	const buttonScale = useSharedValue(1);

	const animatedButtonStyle = useAnimatedStyle(() => ({
		transform: [{ scale: buttonScale.value }],
	}));

	return (
		<AnimatedPressable
			{...rest}
			disabled={disabled}
			onPressIn={() => {
				buttonScale.value = withSpring(0.9, { stiffness: 200 });
			}}
			onPressOut={() => {
				buttonScale.value = withSpring(1, { stiffness: 200 });
			}}
			style={[
				css({
					alignItems: "center",
					backgroundColor,
					borderColor,
					borderRadius: radius,
					borderWidth: 2,
					display: "flex",
					justifyContent: "center",
					paddingHorizontal: 16,
					paddingVertical: 12,
					width: "100%",
				}),
				animatedButtonStyle,
				style,
			]}
		>
			<Stack gap="sm">
				{Icon && Icon}
				{children && (
					<Heading
						color={textColor}
						size={buttonLabelSize}
						weight={buttonLabelWeight}
					>
						{children}
					</Heading>
				)}
			</Stack>
		</AnimatedPressable>
	);
};
export default Button;
