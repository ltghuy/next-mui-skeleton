import { PaletteColor, SimplePaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customColor: PaletteColor;
  }

  interface PaletteOptions {
    customColor: SimplePaletteColorOptions;
  }
}
