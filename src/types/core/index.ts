/**
 * Represents a type that generates a flattened path from an object structure.
 * @template T - The object structure to generate a flattened path from.
 * @template Prefix - The prefix to be added to the path, typically a string or number.
 */
export type ObjPath<T, Prefix extends string | number = ''> = T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? Prefix extends ''
          ? ObjPath<T[K], `${K}`> | `${K}`
          :
              | ObjPath<T[K], `${Prefix}.${Extract<K, string | number>}`>
              | `${Prefix}.${K}`
        : never;
    }[keyof T]
  : Prefix;
