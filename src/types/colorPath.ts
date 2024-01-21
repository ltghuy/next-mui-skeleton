import { Palette } from '@mui/material/styles';
import { ObjPath } from './core';

/**
 * Represents a color path, which is a string-based path to a color within a palette.
 * The string is expected to be in a format that allows resolving the color from a Palette.
 * @template T - The type of the Palette.
 */
export type ColorPath<T = Palette> = ObjPath<T>;
