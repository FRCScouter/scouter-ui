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
import type React from "react";
import { View, type ViewProps } from "react-native";

interface StackProps extends ViewProps {
	direction: "row" | "col";
	children: React.ReactNode;
	gap: number;
}

const Stack: React.FC<StackProps> = ({ direction, children, gap, ...rest }) => {
	const viewStyle = css`
		width: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: ${direction === "col" ? "column" : "row"};
		gap: ${gap}px;
	`;
	return (
		<View style={viewStyle} {...rest}>
			{children}
		</View>
	);
};

export default Stack;
