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

import type { UITheme } from "./ScouterUi.types";

const ScouterUITheme: UITheme = {
	breakpoints: {
		"2xl": "1536px",
		lg: "1024px",
		md: "768px",
		sm: "640px",
		xl: "1280px",
		xs: "320px",
	},
	colors: {
		black: {
			50: "#000",
		},
		blue: {
			50: "#eff6ff",
			100: "#dbeafe",
			200: "#bfdbfe",
			300: "#a3cfff",
			400: "#60a5fa",
			500: "#3b82f6",
			600: "#2563eb",
			700: "#173da6",
			800: "#1a3478",
			900: "#14204a",
			950: "#0c142e",
		},
		gray: {
			50: "#fafafa",
			100: "#f4f4f5",
			200: "#e4e4e7",
			300: "#d4d4d8",
			400: "#a1a1aa",
			500: "#71717a",
			600: "#52525b",
			700: "#3f3f46",
			800: "#27272a",
			900: "#18181b",
		},
		green: {
			50: "#f0fdf4",
			100: "#dcfce7",
			200: "#bbf7d0",
			300: "#86efac",
			400: "#4ade80",
			500: "#22c55e",
			600: "#16a34a",
			700: "#116932",
			800: "#124a28",
			900: "#042713",
			950: "#03190c",
		},
		red: {
			50: "#fef2f2",
			100: "#fee2e2",
			200: "#fecaca",
			300: "#fca5a5",
			400: "#f87171",
			500: "#ef4444",
			600: "#dc2626",
			700: "#991919",
			800: "#511111",
			900: "#300c0c",
		},
		white: {
			50: "#fff",
		},
		yellow: {
			50: "#fefce8",
			100: "#fef9c3",
			200: "#fef08a",
			300: "#fde047",
			400: "#facc15",
			500: "#eab308",
			600: "#ca8a04",
			700: "#a16207",
			800: "#854d0e",
			900: "#713f12",
			950: "#422006",
		},
	},
};

export default ScouterUITheme;
