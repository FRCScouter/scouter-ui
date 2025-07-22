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

export type ScouterSizeKey = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
export type ScouterFontWeightKey = "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
const ScouterSizeMap: Record<ScouterSizeKey, string> = {
	"2xl": "30px",
	"3xl": "36px",
	"4xl": "48px",
	"5xl": "60px",
	"6xl": "72px",
	lg: "20px",
	md: "16px",
	none: "0px",
	sm: "14px",
	xl: "24px",
	xs: "12px",
};
const ScouterFontWeightMap: Record<ScouterFontWeightKey, string> = {
	black: "900",
	bold: "700",
	extrabold: "800",
	light: "300",
	medium: "500",
	normal: "400",
	semibold: "600",
};
export { ScouterFontWeightMap, ScouterSizeMap };
