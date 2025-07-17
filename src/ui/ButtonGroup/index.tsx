import { css } from "@emotion/native";
import React from "react";
import { View, type ViewStyle } from "react-native";
import type { ButtonProps } from "../Button";
import Stack from "../Stack";

interface ButtonGroupProps {
	children?: React.ReactElement<ButtonProps> | React.ReactElement<ButtonProps>[];
	style?: ViewStyle;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, style }) => {
	// Filter out null/undefined children to prevent errors
	const childrenArray = React.Children.toArray(children).filter(Boolean) as React.ReactElement<ButtonProps>[];

	const enhancedChildren = childrenArray.map((child, index) => {
		const isFirst = index === 0;
		const isLast = index === childrenArray.length - 1;

		const borderRadiusStyle = {
			borderBottomLeftRadius: isFirst ? 15 : 0,
			borderBottomRightRadius: isLast ? 15 : 0,
			borderTopLeftRadius: isFirst ? 15 : 0,
			borderTopRightRadius: isLast ? 15 : 0,
		};

		// Merge existing style with borderRadiusStyle
		const existingStyle = child.props.style ?? {};
		return React.cloneElement(child, {
			style: [existingStyle, borderRadiusStyle],
		});
	});

	return (
		<View
			style={[
				css`
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 15px;
				overflow: hidden;
        `,
				style,
			]}
		>
			<Stack direction="row" gap={0}>
				{enhancedChildren}
			</Stack>
		</View>
	);
};

export default ButtonGroup;
