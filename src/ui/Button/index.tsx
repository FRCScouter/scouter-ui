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
import { Pressable, type PressableProps, type StyleProp, Text, type ViewStyle } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import type { UITheme } from "../../ScouterUi.types";

export interface ButtonProps extends PressableProps {
	children: string;
	variant?: "solid" | "outline";
	disabled?: boolean;
	color?: keyof UITheme["colors"];
	style?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ variant = "solid", disabled = false, color = "blue", children, style, ...pressableProps }) => {
	if (typeof children !== "string") {
		throw new Error("Button children must be a string.");
	}
	const theme = useTheme() as UITheme;
	const backgroundColor = variant === "solid" ? (disabled ? "#ccc" : theme.colors[color][500]) : "transparent";
	const borderColor = variant === "outline" ? (disabled ? "#aaa" : theme.colors[color][600]) : "transparent";
	const textColor = variant === "solid" ? "#fff" : disabled ? "#aaa" : theme.colors[color][600];
	const scale = useSharedValue(1);

	const animatedStyle = useAnimatedStyle(() => ({
		transform: [{ scale: scale.value }],
	}));

	return (
		<AnimatedPressable
			disabled={disabled}
			backgroundColor={backgroundColor}
			borderColor={borderColor}
			onPressIn={() => {
				scale.value = withSpring(0.9, { stiffness: 200 });
			}}
			onPressOut={() => {
				scale.value = withSpring(1, { stiffness: 200 });
			}}
			{...pressableProps}
			style={[animatedStyle, style]}
		>
			<ButtonText textColor={textColor}>{children}</ButtonText>
		</AnimatedPressable>
	);
};

const BaseButton = styled(Pressable)<{
	backgroundColor: string;
	borderColor: string;
}>`
    padding-vertical: 12px;
    padding-horizontal: 16px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.backgroundColor};
    border-width: 2px;
    border-color: ${(props) => props.borderColor};
`;

const AnimatedPressable = Animated.createAnimatedComponent(BaseButton);

const ButtonText = styled(Text)<{
	textColor: string;
}>`
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.textColor};
`;

export default Button;
