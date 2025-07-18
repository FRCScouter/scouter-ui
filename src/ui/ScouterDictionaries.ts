export type ScouterSizeKey = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
export type ScouterFontWeightKey = "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
const ScouterSizeDictionary: Record<ScouterSizeKey, string> = {
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
const ScouterFontWeight: Record<ScouterFontWeightKey, string> = {
	black: "900",
	bold: "700",
	extrabold: "800",
	light: "300",
	medium: "500",
	normal: "400",
	semibold: "600",
};
export { ScouterFontWeight, ScouterSizeDictionary };
