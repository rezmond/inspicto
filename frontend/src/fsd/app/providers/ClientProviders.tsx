'use client';
import type { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { sessionApi } from '@/features/session';
import { axiosClient } from '@/shared/lib/axios';
import { localLogger } from '@/shared/lib/logger';

// eslint-disable-next-line boundaries/element-types
import { type AppContext, createStore } from '../store';
import { CssVarsProvider } from './CssVarsProvider';
import { theme } from './theme';

type ClientProvidersProps = {
  children: ReactNode;
};

const appContext = {
  api: {
    session: sessionApi.createMain(axiosClient),
  },
  logger: localLogger,
} satisfies AppContext;

const store = createStore(appContext);

export type RootState = ReturnType<typeof store.getState>;

export const ClientProviders: FC<ClientProvidersProps> = ({ children }) => (
  <Provider store={store}>
    <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
  </Provider>
);
