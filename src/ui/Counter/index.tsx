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

import { type Ref, useCallback, useImperativeHandle } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import useResolveColor from "../../hooks/useResolveColor";
import useStateWithCallback from "../../hooks/useStateCallback";
import type { ScouterUIThemeColor } from "../../ScouterUi.types";
import Button from "../Button";
import Heading from "../Heading";
import Stack, { type StackProps } from "../Stack";

/**
 * Counter component for incrementing/decrementing a value.
 * Supports imperative getCounter via ref (React 19 style).
 */
type CounterStackProps = Omit<StackProps, "children">;
export interface CounterProps extends CounterStackProps {
	/** Called when the value changes */
	onChange?: (newValue: number) => void;
	/** Ref for imperative handle (getValue) */
	valueRef?: Ref<{ getValue: () => number }>;
	/** Button color */
	color?: ScouterUIThemeColor;
	/** Initial value (default: 0) */
	initialValue?: number;
}

const Counter = ({ onChange, valueRef, color, initialValue = 0, ...stackProps }: CounterProps) => {
	const [value, setValue] = useStateWithCallback<number>(initialValue);
	const iconColor = useResolveColor("white.50");

	useImperativeHandle(
		valueRef,
		() => ({
			getValue: () => value,
		}),
		[value],
	);

	const handleValueChange = useCallback(
		(type: "increment" | "decrement") => {
			const updatedValue = type === "increment" ? value + 1 : value - 1;
			setValue(updatedValue, (newValue) => {
				onChange?.(newValue);
			});
		},
		[onChange, value, setValue],
	);

	return (
		<Stack
			direction="row"
			gap="sm"
			{...stackProps}
		>
			<Button
				testID="counter-decrement"
				onPress={() => handleValueChange("decrement")}
				color={color}
				style={{ width: "40%" }}
				Icon={
					<AntDesign
						name="minus"
						color={iconColor}
					/>
				}
			/>
			<Heading>{value}</Heading>
			<Button
				testID="counter-increment"
				onPress={() => handleValueChange("increment")}
				color={color}
				style={{ width: "40%" }}
				Icon={
					<AntDesign
						name="plus"
						color={iconColor}
					/>
				}
			/>
		</Stack>
	);
};

export default Counter;
