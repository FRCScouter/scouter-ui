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
import React from "react";
import type { ViewStyle } from "react-native";
import type { ButtonProps } from "./button";
import Stack from "./stack";

interface ButtonGroupProps {
	children?: React.ReactElement<ButtonProps> | React.ReactElement<ButtonProps>[];
	style?: ViewStyle;
	direction?: "row" | "column";
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, style = undefined, direction = "row" }) => {
	// Filter out null/undefined children to prevent errors
	const childrenArray = React.Children.toArray(children).filter(Boolean) as React.ReactElement<ButtonProps>[];

	const enhancedChildren = childrenArray.map((child, index) => {
		const isFirst = index === 0;
		const isLast = index === childrenArray.length - 1;

		const rowborderRadiusStyle: ViewStyle = {
			borderBottomLeftRadius: isFirst ? 15 : 0,
			borderBottomRightRadius: isLast ? 15 : 0,
			borderTopLeftRadius: isFirst ? 15 : 0,
			borderTopRightRadius: isLast ? 15 : 0,
		};

		const columnBorderRadiusStyle: ViewStyle = {
			borderBottomLeftRadius: isFirst ? 0 : 0,
			borderBottomRightRadius: isLast ? 0 : 0,
			borderTopLeftRadius: isFirst ? 0 : 0,
			borderTopRightRadius: isLast ? 0 : 0,
		};

		// Merge existing style with borderRadiusStyle
		const existingStyle = child.props.style ?? {};
		return React.cloneElement(child, {
			style: [existingStyle, direction === "column" ? columnBorderRadiusStyle : rowborderRadiusStyle],
		});
	});

	return (
		<Stack
			gap="none"
			direction={direction}
			style={[css`overflow: hidden; border-radius: 15px;`, style || {}]}
		>
			{enhancedChildren}
		</Stack>
	);
};

export default ButtonGroup;
