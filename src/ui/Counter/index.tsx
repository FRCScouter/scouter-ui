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

import { type Ref, useCallback, useImperativeHandle, useState } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import useResolveColor from "../../hooks/useResolveColor";
import type { ScouterUIThemeColor } from "../../ScouterUi.types";
import Button from "../Button";
import Heading from "../Heading";
import Stack from "../Stack";

/**
 * Counter component for incrementing/decrementing a value.
 * Supports imperative getCounter via ref (React 19 style).
 */
export interface CounterProps {
    /** Called when the counter value changes */
    onChange?: (newValue: number) => void;
    /** Ref for imperative handle (getCounter) */
    ref?: Ref<{ getCounter: () => number }>;
    /** Button color */
    color?: ScouterUIThemeColor;
    /** Initial value (default: 0) */
    initialValue?: number;
    /** Additional props for Stack */
    [key: string]: any;
}

const Counter = ({
    onChange,
    ref,
    color,
    initialValue = 0,
    ...stackProps
}: CounterProps) => {
    const [counter, setCounter] = useState<number>(initialValue);
    const iconColor = useResolveColor("white.50");

    useImperativeHandle(ref, () => ({
        getCounter: () => counter,
    }), [counter]);

    const handleCounterChange = useCallback(
        (type: "increment" | "decrement") => {
            const updatedCount = type === "increment" ? counter + 1 : counter - 1;
            setCounter(updatedCount);
            onChange?.(updatedCount);
        },
        [onChange, counter]
    );

    return (
        <Stack direction="row" gap="sm" {...stackProps}>
            <Button
                testID="counter-decrement"
                onPress={() => handleCounterChange("decrement")}
                color={color}
                style={{ width: "40%" }}
                Icon={<AntDesign name="minus" color={iconColor} />}
            />
            <Heading>{counter}</Heading>
            <Button
                testID="counter-increment"
                onPress={() => handleCounterChange("increment")}
                color={color}
                style={{ width: "40%" }}
                Icon={<AntDesign name="plus" color={iconColor} />}
            />
        </Stack>
    );
};

export default Counter;
