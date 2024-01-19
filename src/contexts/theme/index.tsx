'use client';

import { getGlobalStyles } from '@/assets/styles/globalStyles';
import { lightTheme } from '@/assets/themes/light';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProviderProps } from '@mui/material/styles/ThemeProvider';

export interface AppThemeProviderProps extends Partial<ThemeProviderProps> {}

export const AppThemeProvider = ({ children, ...props }: AppThemeProviderProps) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider {...props} theme={lightTheme}>
        <CssBaseline />
        <GlobalStyles styles={() => getGlobalStyles(lightTheme)} />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};
