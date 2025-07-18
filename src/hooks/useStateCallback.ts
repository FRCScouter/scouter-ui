// Made by WrathChaos
/** biome-ignore-all lint/suspicious/noExplicitAny: <Global hook> */

import { type SetStateAction, useCallback, useEffect, useRef, useState } from "react";

type Callback<_T> = (value?: any) => void;
type DispatchWithCallback<_T> = (value: any, callback?: Callback<any>) => void;

function useStateWithCallback<_T>(initialState: any | (() => any)): [any, DispatchWithCallback<SetStateAction<any>>] {
	const [state, _setState] = useState<any>(initialState);

	const callbackRef = useRef<Callback<any> | undefined>(undefined);
	const isFirstCallbackCall = useRef<boolean>(true);

	const setState = useCallback((setStateAction: SetStateAction<any>, callback?: Callback<any>): void => {
		callbackRef.current = callback ?? undefined;
		_setState(setStateAction);
	}, []);

	useEffect(() => {
		if (isFirstCallbackCall.current) {
			isFirstCallbackCall.current = false;
			return;
		}
		callbackRef.current?.(state);
	}, [state]);

	return [state, setState];
}

export default useStateWithCallback;
