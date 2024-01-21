'use client';
import { SWRConfig } from 'swr';

export const SWRProvider = ({ children }: React.PropsWithChildren) => {
  return <SWRConfig value={{ errorRetryCount: 3 }}>{children}</SWRConfig>;
};
