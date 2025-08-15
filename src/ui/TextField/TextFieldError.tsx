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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Heading from "../Heading";
import type { ScouterFontWeightKey, ScouterSizeKey } from "../ScouterDictionaries";

export interface TextFieldErrorProps {
	children?: React.ReactNode;
	textFieldErrorTextSize?: ScouterSizeKey;
	textFieldErrorFontWeight?: ScouterFontWeightKey;
}

const TextFieldError: React.FC<TextFieldErrorProps> = (props) => {
	const { children, textFieldErrorTextSize = "sm", textFieldErrorFontWeight = "medium" } = props;
	const theme = useTheme();

	return (
		<Container>
			<MaterialIcons
				name="dangerous"
				size={18}
				color={theme.colors.red[500]}
			/>
			<Heading
				size={textFieldErrorTextSize}
				weight={textFieldErrorFontWeight}
				color={"red.500"}
			>
				{children}
			</Heading>
		</Container>
	);
};

const Container = styled.View`
    display: flex;
    flex-direction: row;
`;

export default TextFieldError;
