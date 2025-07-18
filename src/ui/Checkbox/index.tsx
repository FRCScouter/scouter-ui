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
import { useTheme } from "@emotion/react";
import { useCallback, useEffect, useMemo } from "react";
import { Pressable } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSequence, withSpring } from "react-native-reanimated";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import useStateWithCallback from "../../hooks/useStateCallback";
import type { UITheme } from "../../ScouterUi.types";
import { ScouterSizeDictionary, type ScouterSizeKey } from "../ScouterDictionaries";

interface CheckboxProps {
    disabled?: boolean;
    label?: string;
    size?: ScouterSizeKey;
    variant?: "outline" | "flat";
    color?: `${keyof UITheme["colors"]}.${number}`;
    onPress: (isChecked: boolean) => void;
    useBuiltInState?: boolean;
    isChecked?: boolean;
    rounded?: string;
}

const resolveColor = (theme: UITheme, colorKey: `${keyof UITheme["colors"]}.${number}`): string => {
    const [colorBase, shade] = colorKey.split(".") as [keyof UITheme["colors"], string];
    return theme.colors?.[colorBase]?.[shade] ?? "black";
};

const Checkbox: React.FC<CheckboxProps> = ({
    disabled = false,
    onPress,
    size = "xl",
    color = "blue.700",
    variant = "flat",
    label = "checkbox-default",
    useBuiltInState = true,
    isChecked = false,
    rounded = "5px",
}) => {
    const [checked, setChecked] = useStateWithCallback<boolean>(false);
    const theme = useTheme() as UITheme;
    const checkboxColor = useMemo(() => resolveColor(theme, color), [theme, color]);
    const checkboxSize = ScouterSizeDictionary[size];
    const iconSize = useMemo(() => Number.parseInt(checkboxSize, 10), [checkboxSize])
    const iconScale = useSharedValue(1);
    const boxScale = useSharedValue(1);

    const animatedIconStyle = useAnimatedStyle(() => ({ transform: [{ scale: iconScale.value }] }));
    const animatedBoxStyle = useAnimatedStyle(() => ({ transform: [{ scale: boxScale.value }] }));

    useEffect(() => {
        setChecked(isChecked);
    }, [isChecked, setChecked]);

    const onCheckboxPress = useCallback(() => {
        if (useBuiltInState) {
            setChecked(!checked, (newCheckedValue) => {
                onPress?.(newCheckedValue);

                iconScale.value = withSequence(withSpring(1.2, { damping: 5 }), withSpring(1));

                // Animate box bounce
                boxScale.value = withSequence(withSpring(0.9, { damping: 5 }), withSpring(1.05, { damping: 5 }), withSpring(1));
            });
        }
    }, [onPress, useBuiltInState, checked, setChecked, boxScale, iconScale]);

    return (
        <Pressable
            onPress={onCheckboxPress}
            disabled={disabled}
            id="pressable"
            testID={label}
            accessibilityLabel={label}
            aria-checked={isChecked}
        >
            <Animated.View
                style={[
                    css`
                        width: ${checkboxSize};
                        height: ${checkboxSize};
                        border-radius: ${rounded};
                        border-width: ${variant === "outline" ? "2px" : "0px"};
                        border-color: ${variant === "outline" ? checkboxColor : "transparent"};
                        background-color: ${variant === "outline" ? "none" : checkboxColor};
                        display: flex;
                        align-items: center;
                        justify-content: center;
            `,
                    animatedBoxStyle,
                ]}
            >
                {checked && (
                    <Animated.View style={animatedIconStyle}>
                        <FontAwesome6 name="check" color={variant === "flat" ? "#fff" : checkboxColor} size={iconSize / 2} />
                    </Animated.View>
                )}
            </Animated.View>
        </Pressable>
    );
};
export default Checkbox;
