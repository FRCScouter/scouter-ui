import { css } from "@emotion/native";
import { useTheme } from "@emotion/react";
import { Text } from "react-native";
import type { UITheme } from "../../ScouterUi.types";

export type HeadingSizeKey = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";

const HeadingSize: Record<HeadingSizeKey, string> = {
	"2xl": "30px",
	"3xl": "36px",
	"4xl": "48px",
	"5xl": "60px",
	"6xl": "72px",
	lg: "20px",
	md: "16px",
	sm: "14px",
	xl: "24px",
	xs: "12px",
};

type FontWeightKey = "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";

const FontWeight: Record<FontWeightKey, string> = {
	black: "900",
	bold: "700",
	extrabold: "800",
	light: "300",
	medium: "500",
	normal: "400",
	semibold: "600",
};

interface HeadingProps {
	size?: HeadingSizeKey;
	weight?: FontWeightKey;
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
    font-size: ${HeadingSize[size]};
    font-weight: ${FontWeight[weight]};
  `;

	return <Text style={textStyle}>{children}</Text>;
};

export default Heading;
