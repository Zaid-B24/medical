'use client';

import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { Session } from 'next-auth';

export const Providers = ({ children, session }: { children: ReactNode; session?: Session}) => {
 
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
        <Toaster />
      </ThemeProvider>
    </SessionProvider>
  );
};
