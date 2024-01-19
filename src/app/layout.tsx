import { poppinsFont } from '@/assets/fonts';
import { CoreAvatar, CoreStack } from '@/components/core';
import { AppThemeProvider } from '@/contexts/theme';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next14 - MUI - Skeleton',
  description: 'Next14 - MUI - Typescript skeleton',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={poppinsFont.className}>
      <body>
        <AppThemeProvider>
          <CoreStack>
            <CoreAvatar />
            {children}
          </CoreStack>
        </AppThemeProvider>
      </body>
    </html>
  );
}
