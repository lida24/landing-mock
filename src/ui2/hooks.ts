import React, { useMemo, useEffect, useRef, useCallback } from 'react';


export const useMemoNoWarn = useMemo;
export const useEffectNoWarn = useEffect;
export const useCallbackNoWarn = useCallback;

export const useMemoDeps = <TResult>(
    factory: (...args: any[]) => TResult,
    deps: React.DependencyList,
): TResult => useMemoNoWarn(() => factory(...deps), [factory, ...deps]);

export const useUpdateOnlyEffect = (
    effect: React.EffectCallback,
    deps: React.DependencyList,
): void => {
    const isFirstRun = useRef(true);
    useEffectNoWarn(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return undefined;
        }
        return effect();
    }, deps);
};

export const usePrevious = <TValue, TDefault = TValue>(
    value: TValue,
    defaultValue?: TDefault,
): TValue | TDefault => {
    const ref = useRef<TValue | TDefault>(defaultValue);
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

export const useTimeoutEffect = (callback: () => void, timeout: number) =>
    useEffectNoWarn(() => {
        const timer = setTimeout(callback, timeout);
        return () => clearTimeout(timer);
    }, []);

export const useInputOnChange = (callback: (value: any) => void) =>
    useCallback(e => callback(e.target.value), [callback]);

export const useNoEvent = <TFunc extends (...args: any[]) => any>(callback: TFunc) =>
    useCallback(() => callback(), [callback]);


const DATA_UNKNOWN = Symbol('DATA_UNKNOWN');
export const useDataRequest = <TData>(data: TData, getData: () => void) => {
    const oldData = usePrevious(data, DATA_UNKNOWN);
    useEffect(
        () => {
            if (!data && oldData !== data)
                getData();
        },
        [data, getData, oldData],
    );
};
