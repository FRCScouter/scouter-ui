import { css } from "@emotion/native";
import { useTheme } from "@emotion/react";
import type React from "react";
import { useEffect } from "react";
import { Pressable, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import type { IconProps } from "react-native-vector-icons/Icon";
import type { UITheme } from "../../ScouterUi.types";

interface CheckboxProps {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    checkIcon?: React.ReactElement<IconProps>;
    color?: `${keyof UITheme["colors"]}.${number}`;
    disableIcon?: boolean;
    size?: number;
}

const resolveColor = (theme: UITheme, colorKey: `${keyof UITheme["colors"]}.${number}`): string => {
    const [colorBase, shade] = colorKey.split(".") as [keyof UITheme["colors"], string];
    return theme.colors?.[colorBase]?.[shade] ?? "black";
};

export const Checkbox: React.FC<CheckboxProps> = ({
    checked = false,
    onChange,
    checkIcon,
    color = "primary.500",
    disableIcon = false,
    size = 24,
}) => {
    const animated = useSharedValue(checked ? 1 : 0);
    const theme = useTheme() as UITheme;

    useEffect(() => {
        animated.value = withTiming(checked ? 1 : 0, { duration: 150 });
    }, [checked, animated]);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: animated.value,
        transform: [{ scale: animated.value * 0.1 + 0.9 }],
    }));

    const borderColor = resolveColor(theme, color);

    return (
        <Pressable onPress={() => onChange?.(!checked)}>
            <View
                style={css`
          width: ${size}px;
          height: ${size}px;
          border-width: 2px;
          border-radius: 4px;
          border-color: ${borderColor};
          align-items: center;
          justify-content: center;
        `}
            >
                {!disableIcon && checked && (
                    <Animated.View style={[animatedStyle]}>
                        {checkIcon ?? (
                            <View
                                style={css`
                                    width: ${size * 0.5}px;
                                    height: ${size * 0.5}px;
                                    background-color: ${borderColor};
                                    border-radius: 2px;
                `}
                            />
                        )}
                    </Animated.View>
                )}
            </View>
        </Pressable>
    );
};

export default Checkbox;
