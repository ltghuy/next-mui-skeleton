import { Components, Theme } from '@mui/material';

export const muiAvatarTheme = ({
  palette,
}: Theme): Pick<Components<Omit<Theme, 'components'>>, 'MuiAvatar'> => ({
  MuiAvatar: {
    styleOverrides: {
      root: {
        width: '32px',
        height: '32px',
        fontWeight: 400,
        fontSize: '20px',
        backgroundColor: palette.grey[500],
        color: palette.common.white,
      },
    },
  },
});
