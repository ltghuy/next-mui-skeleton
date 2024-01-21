import { PaletteColor } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface Palette {
    customColor: PaletteColor;
  }

  interface PaletteOptions {
    customColor: SimplePaletteColorOptions;
  }
}
