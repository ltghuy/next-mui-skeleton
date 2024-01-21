import { poppinsFont } from '@/assets/fonts';
import { SWRProvider } from '@/contexts/swr';
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
          <SWRProvider>{children}</SWRProvider>
        </AppThemeProvider>
      </body>
    </html>
  );
}
