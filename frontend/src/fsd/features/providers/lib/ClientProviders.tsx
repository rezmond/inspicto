'use client';
import type { FC, ReactNode } from 'react';
import { CssVarsProvider } from './CssVarsProvider';
import { theme } from './theme';

type ClientProvidersProps = {
  children: ReactNode;
};

export const ClientProviders: FC<ClientProvidersProps> = ({ children }) => (
  <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
);
