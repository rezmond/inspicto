'use client';
import type { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { createStore } from '../store';
import { CssVarsProvider } from './CssVarsProvider';
import { theme } from './theme';

type ClientProvidersProps = {
  children: ReactNode;
};

const store = createStore();

export const ClientProviders: FC<ClientProvidersProps> = ({ children }) => (
  <Provider store={store}>
    <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
  </Provider>
);
