import { ObjPath } from '@/types/core';

/**
 * Retrieves a value from an object by providing a path, using dot notation.
 *
 * @template T - The type of the input object.
 *
 * @param obj - The source object from which to retrieve the value.
 * @param path - A string representing the path to the desired value, using dot notation.
 *
 * @returns The value located at the specified path in the object, or `undefined` if the path does not exist.
 *
 * @example
 *  let obj = {
 *    bar: {
 *      name: 'Kelvin',
 *    },
 *  };
 *  console.log(getValueByPath(obj, 'bar.name'));
 * // => Kelvin
 */
export const getValueByPath = <T extends object>(obj: T, path: ObjPath<T>) => {
  const parts = (path as string).split('.');
  let result = obj as any;

  for (const part of parts) {
    if (typeof result !== 'object' || result === null) {
      return undefined;
    }
    result = result[part];
  }
  return result;
};
