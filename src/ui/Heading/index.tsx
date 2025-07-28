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
import { Text, type ViewStyle } from "react-native";
import useResolveColor from "../../hooks/useResolveColor";
import type { ScouterUIThemeColor } from "../../ScouterUi.types";
import { type ScouterFontWeightKey, ScouterFontWeightMap, type ScouterSizeKey, ScouterSizeMap } from "../ScouterDictionaries";

interface HeadingProps {
	size?: ScouterSizeKey;
	weight?: ScouterFontWeightKey;
	color?: ScouterUIThemeColor;
	children: React.ReactNode;
	style?: ViewStyle;
}

const Heading: React.FC<HeadingProps> = ({ size = "md", weight = "normal", color = "black.50", children, style }) => {
	const resolvedColor = useResolveColor(color);

	const textStyle = css`
		color: ${resolvedColor};
		font-size: ${ScouterSizeMap[size]};
		font-weight: ${ScouterFontWeightMap[weight]};
  `;

	return <Text style={[textStyle, style]}>{children}</Text>;
};

export default Heading;
