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

import type { ScouterUIThemeColor } from "../../ScouterUi.types";
import Heading from "../Heading";
import type { ScouterFontWeightKey, ScouterSizeKey } from "../ScouterDictionaries";

export interface TextFieldHelperProps {
	children: React.ReactNode;
	textFieldHelperFontSize?: ScouterSizeKey;
	textFieldHelperTextColor?: ScouterUIThemeColor;
	textFieldHelperFontWeight?: ScouterFontWeightKey;
}

const TextFieldHelper: React.FC<TextFieldHelperProps> = (props) => {
	const { children, textFieldHelperFontSize = "lg", textFieldHelperTextColor = "white.50", textFieldHelperFontWeight = "medium" } = props
	return (
		<Heading
			size={textFieldHelperFontSize}
			color={textFieldHelperTextColor}
			weight={textFieldHelperFontWeight}
		>
			{children}
		</Heading>
	);
};

export default TextFieldHelper;
