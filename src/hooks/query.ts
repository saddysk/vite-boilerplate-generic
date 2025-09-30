import { isArray } from 'lodash';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

// https://github.com/remix-run/react-router/-/packages/react-router-native/index.tsx
export function trimScheme(url: string) {
  return url.replace(/^.*?:\/\//, '');
}

// https://blog.logrocket.com/use-state-url-persist-state-usesearchparams/
export function useSearchParamsState<T, K extends string = string>(
  searchParamName: K,
  defaultValue: T,
  parser?: {
    serialize: (input: T) => string;
    deserialize: (input: string | null) => T;
  }
): readonly [
  searchParamsState: T,
  setSearchParamsState: (newState: T, additionalParams?: { [key: string]: string | number }) => void
] {
  const [searchParams, setSearchParams] = useSearchParams();

  return useMemo(() => {
    const param = searchParams.get(searchParamName);

    const acquiredSearchParam = parser?.deserialize ? parser?.deserialize(param) : (param as unknown as T);

    const searchParamsState = acquiredSearchParam ?? defaultValue;

    const setSearchParamsState = (newState: T, additionalParams?: { [key: string]: string | number }) => {
      let stringVal: string;

      if (parser?.serialize) {
        stringVal = parser.serialize(newState);
      } else if (isArray(newState)) {
        stringVal = newState.join(',');
      } else {
        stringVal = newState as unknown as string;
      }

      const next = Object.assign(
        {},
        { ...searchParams },
        { [searchParamName]: stringVal },
        { ...additionalParams }
      );

      setSearchParams(next, {
        replace: true,
        // how we can do shallow?
      });
    };

    return [searchParamsState, setSearchParamsState];
  }, [searchParams, searchParamName, setSearchParams, parser, defaultValue]);
}

export const pickFirstValue = <T>(val: T) => {
  if (isArray(val)) {
    return val[0];
  }

  return val;
};

export type ParamKeyValuePair = [string, string];

export type URLSearchParamsInit =
  | string
  | ParamKeyValuePair[]
  | Record<string, string | string[]>
  | URLSearchParams;

/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */
export function createSearchParams(init: URLSearchParamsInit = ''): URLSearchParams {
  return new URLSearchParams(
    typeof init === 'string' || Array.isArray(init) || init instanceof URLSearchParams
      ? init
      : Object.keys(init).reduce((memo, key) => {
          const value = init[key];
          return memo.concat(
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]
          );
        }, [] as ParamKeyValuePair[])
  );
}
