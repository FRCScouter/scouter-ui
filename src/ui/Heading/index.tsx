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
import { Text } from "react-native";
import type { UITheme } from "../../ScouterUi.types";
import {
	ScouterFontWeight,
	type ScouterFontWeightKey,
	ScouterSizeDictionary,
	type ScouterSizeKey,
} from "../ScouterDictionaries";

interface HeadingProps {
	size?: ScouterSizeKey;
	weight?: ScouterFontWeightKey;
	color?: `${keyof UITheme["colors"]}.${number}`;
	children: React.ReactNode;
}

const resolveColor = (theme: UITheme, colorKey: `${keyof UITheme["colors"]}.${number}`): string => {
	const [colorBase, shade] = colorKey.split(".") as [keyof UITheme["colors"], string];
	return theme.colors?.[colorBase]?.[shade] ?? "black";
};

const Heading: React.FC<HeadingProps> = ({ size = "md", weight = "normal", color = "blue.200", children }) => {
	const theme = useTheme() as UITheme;

	const resolvedColor = resolveColor(theme, color);

	const textStyle = css`
    color: ${resolvedColor};
    font-size: ${ScouterSizeDictionary[size]};
    font-weight: ${ScouterFontWeight[weight]};
  `;

	return <Text style={textStyle}>{children}</Text>;
};

export default Heading;
