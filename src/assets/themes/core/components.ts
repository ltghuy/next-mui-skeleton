import { muiAvatarTheme } from '@/components/core/avatar/CoreAvatar.theme';
import { muiButtonTheme } from '@/components/core/button/CoreButton.theme';
import { muiStackTheme } from '@/components/core/stack/CoreStack.theme';
import { Components, Theme } from '@mui/material';

export const getThemeComponents = (theme: Theme): Components<Omit<Theme, 'components'>> => ({
  ...muiButtonTheme(),
  ...muiStackTheme(),
  ...muiAvatarTheme(theme),
});
