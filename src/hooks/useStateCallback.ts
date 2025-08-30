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

// Made by WrathChaos
/** biome-ignore-all lint/suspicious/noExplicitAny: <Global hook> */

import { type SetStateAction, useCallback, useEffect, useRef, useState } from "react";

/**
 * Like useState, but allows passing a callback that is called after the state is updated.
 *
 * @param initialState - The initial state value or initializer function.
 * @returns [state, setStateWithCallback]
 *
 * @example
 * const [checked, setChecked] = useStateWithCallback<boolean>(false);
 * setChecked(true, (newChecked) => { console.log('new value:', newChecked); });
 */
type Callback<T> = (value: T) => void;
type DispatchWithCallback<T> = (value: SetStateAction<T>, callback?: Callback<T>) => void;

function useStateWithCallback<T>(initialState: T | (() => T)): [T, DispatchWithCallback<T>] {
	const [state, setState] = useState<T>(initialState);
	const callbackRef = useRef<Callback<T> | undefined>(undefined);
	const isFirstCallbackCall = useRef<boolean>(true);

	const setStateWithCallback: DispatchWithCallback<T> = useCallback((setStateAction, callback) => {
		callbackRef.current = callback;
		setState(setStateAction);
	}, []);

	useEffect(() => {
		if (isFirstCallbackCall.current) {
			isFirstCallbackCall.current = false;
			return;
		}
		if (callbackRef.current) {
			callbackRef.current(state);
			callbackRef.current = undefined;
		}
	}, [state]);

	return [state, setStateWithCallback];
}

export default useStateWithCallback;
