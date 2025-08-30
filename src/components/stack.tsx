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
/** biome-ignore-all lint/suspicious/noExplicitAny: JSX CODE */

import React, { type Ref, useMemo } from "react";
import { View, type ViewProps, type ViewStyle } from "react-native";
import { type ScouterSizeKey, ScouterSizeMap } from "./scouterDictionary";

export interface StackProps extends ViewProps {
	direction?: "column" | "row";
	gap?: ScouterSizeKey;
	style?: ViewStyle | ViewStyle[] | undefined;
	children: React.ReactNode;
	ref?: Ref<View>;
}

const Stack: React.FC<StackProps> = ({ direction = "row", gap = "sm", children, style, ref, ...rest }) => {
	const gapSize = useMemo(() => Number.parseInt(ScouterSizeMap[gap], 10), [gap]);
	const isRow = direction === "row";

	const childrenArray = React.Children.toArray(children);
	const spacedChildren = childrenArray.map((child, idx) => {
		const childStyle: ViewStyle = {};
		if (idx !== 0) {
			if (isRow) {
				childStyle.marginLeft = gapSize;
			} else {
				childStyle.marginTop = gapSize;
			}
		}

		if (React.isValidElement(child)) {
			const element = child as React.ReactElement<any, string | React.JSXElementConstructor<any>>;
			const existingStyle = element.props?.style;
			const mergedStyle = existingStyle ? [existingStyle, childStyle] : [childStyle];
			return React.cloneElement(element, {
				style: mergedStyle,
			});
		}
		return child;
	});

	return (
		<View
			{...rest}
			ref={ref}
			style={[{ alignItems: "center", display: "flex", flexDirection: direction, justifyContent: "center" }, style]}
		>
			{spacedChildren}
		</View>
	);
};

export default Stack;
