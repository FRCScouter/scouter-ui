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
	return <View style={viewStyle} {...rest}>{children}</View>;
};

export default Stack;
