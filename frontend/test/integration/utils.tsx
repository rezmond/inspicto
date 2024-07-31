import {
  type RenderOptions,
  type RenderResult as RenderResultBase,
  render as renderBase,
} from '@testing-library/react';
import type { FC, ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { AppContext, createStore } from '@/app/store';
import type { SessionApi } from '@/features/session';
import type { Logger } from '@/shared/lib/logger';
import {
  AppRouterContext,
  type AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime';

type RenderResult = RenderResultBase & {
  appContext: AppContext;
};

const appRouterInstanceMock: AppRouterInstance = {
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  push: jest.fn(),
  replace: jest.fn(),
  prefetch: jest.fn(),
};

export const render = (
  ui: ReactElement,
  options?: RenderOptions,
): RenderResult => {
  const sessionApi: SessionApi = {
    signUp: jest.fn(),
    signIn: jest.fn(),
  };
  const logger: Logger = {
    error: jest.fn(),
  };
  const appContext: AppContext = {
    api: {
      session: sessionApi,
    },
    logger: logger,
  };
  const store = createStore(appContext);

  const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => (
    <AppRouterContext.Provider value={appRouterInstanceMock}>
      <Provider store={store}>{children}</Provider>
    </AppRouterContext.Provider>
  );

  return {
    ...renderBase(ui, {
      wrapper: AllTheProviders,
      ...options,
    }),
    appContext,
  };
};
