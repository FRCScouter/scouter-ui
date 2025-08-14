// emotion.d.ts
import "@emotion/react";
import type { UITheme } from "./ScouterUi.types";

declare module "@emotion/react" {
	export interface Theme extends UITheme {}
}

declare module "@emotion/native" {
	export interface Theme extends UITheme {}
}