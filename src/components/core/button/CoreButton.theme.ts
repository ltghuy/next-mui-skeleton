import { Components, Theme } from '@mui/material';

export const muiButtonTheme = (): Pick<Components<Omit<Theme, 'components'>>, 'MuiButton'> => ({
  MuiButton: {
    styleOverrides: {},
    defaultProps: {
      variant: 'contained',
      size: 'medium',
    },
  },
});
