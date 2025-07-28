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

import { useTheme } from "@emotion/react";
import { useMemo } from "react";
import { type ColorValue, Platform } from "react-native";
import type { ScouterUIThemeColor, UITheme } from "../ScouterUi.types";

/**
 * React Native hook to resolve a theme color string like "blue.700" to its actual color value.
 * Always returns a string for compatibility with UI libraries.
 * Handles missing colors, malformed keys, and allows a custom fallback.
 * Supports platform-specific colors and warns in development if the color is not valid.
 *
 * @param color - The color key, e.g. "blue.700" or just "blue".
 * @param fallback - Fallback color if not found (default: "black").
 * @param platformColors - Optional object for platform-specific overrides, e.g. { ios: 'red', android: 'blue' }
 * @returns The resolved color as a string.
 */
const useResolveColor = (
	color: ScouterUIThemeColor | undefined,
	fallback: string = "black",
	platformColors?: Partial<Record<typeof Platform.OS, ColorValue>>,
): string => {
	const theme = useTheme() as UITheme;

	return useMemo(() => {
		if (platformColors?.[Platform.OS]) {
			return String(platformColors[Platform.OS]);
		}
		if (!color || typeof color !== "string") return fallback;
		const [colorBase, shade] = color.split(".") as [keyof UITheme["colors"], string | undefined];
		if (!theme.colors || !theme.colors[colorBase]) {
			if (typeof __DEV__ !== "undefined" && __DEV__) {
				console.warn(`[useResolveColor] Color base "${colorBase}" not found in theme. Returning fallback.`);
			}
			return fallback;
		}
		const resolvedShade = shade ?? "500";
		const colorValue = theme.colors[colorBase]?.[resolvedShade];
		if (!colorValue) {
			if (typeof __DEV__ !== "undefined" && __DEV__) {
				console.warn(
					`[useResolveColor] Shade "${resolvedShade}" for color "${colorBase}" not found in theme. Returning fallback.`,
				);
			}
			return fallback;
		}
		// Always return a string for UI library compatibility
		return String(colorValue);
	}, [color, theme, fallback, platformColors]);
};

export default useResolveColor;
