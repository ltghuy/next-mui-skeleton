import { Components, Theme } from '@mui/material';

export const muiTypographyTheme = ({
  palette,
}: Theme): Pick<Components<Omit<Theme, 'components'>>, 'MuiTypography'> => ({
  MuiTypography: {
    styleOverrides: {},
    defaultProps: {
      color: palette.common.black,
    },
  },
});
