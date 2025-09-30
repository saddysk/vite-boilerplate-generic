import { first, isArray, trim, trimEnd } from 'lodash';

export function getFirst<T>(input: T | T[] | undefined): T | undefined {
  if (input == null) {
    return;
  }

  if (isArray(input)) {
    return first(input);
  }

  return input;
}

export function trimPath(path: string): string {
  if (path === '/' || trim(path) === '/') {
    return path;
  }

  const cleanPath = trim(path);
  if (path === '/' || path === '') {
    return '/';
  }

  return trimEnd(cleanPath);
}

export function toEnum<T extends string, TEnumValue extends string>(
  enumVariable: { [key in T]: TEnumValue },
  item: string,
  fallback?: TEnumValue
): TEnumValue {
  if (item == null && fallback != null) {
    return fallback;
  }

  const enumValues = Object.values(enumVariable);

  return (enumValues.find((v) => v === item) as TEnumValue) ?? fallback ?? null;
}

export function move<T>(from: number, to: number, arr: T[]): T[] {
  const newArr = [...arr];

  const item = newArr.splice(from, 1)[0];
  newArr.splice(to, 0, item);

  return newArr;
}
