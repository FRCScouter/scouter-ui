import { css } from "@emotion/native";
import { useCallback } from "react";
import { Pressable, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withSpring } from "react-native-reanimated";
import useResolveColor from "../../hooks/useResolveColor";
import useStateWithCallback from "../../hooks/useStateCallback";
import type { ScouterUIThemeColor } from "../../ScouterUi.types";
import Heading from "../Heading";
import { type ScouterFontWeightKey, ScouterSizeDictionary, type ScouterSizeKey } from "../ScouterDictionaries";

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

	const radioButtonColor = useResolveColor(color);
	const radioButtonSize = ScouterSizeDictionary[size];

	const animatedRadioButtonStyle = useAnimatedStyle(() => ({
		transform: [{ scale: radioButtonScale.value }],
	}));

	const onRadioButtonPress = useCallback(() => {
		setChecked(!checked, (newValue) => {
			onPress?.(newValue);
			radioButtonScale.value = withSequence(withSpring(0.9, { damping: 5 }), withSpring(1.05, { damping: 5 }), withSpring(1));
		});
	}, [onPress, setChecked, checked, radioButtonScale]);

	return (
		<View
			style={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        `}
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
						<View
							style={css`
                                height: 50%;
                                width: 50%;
                                border-radius: 100%;
                                background-color: ${radioButtonColor};
                            `}
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
		</View>
	);
};
export default RadioButton;
