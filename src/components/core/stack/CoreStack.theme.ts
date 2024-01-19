import { Components, Theme } from '@mui/material';

export const muiStackTheme = (): Pick<Components<Omit<Theme, 'components'>>, 'MuiStack'> => ({
  MuiStack: {
    styleOverrides: {},
  },
});
