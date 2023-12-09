import {
  type RenderOptions,
  type RenderResult as RenderResultBase,
  render as renderBase,
} from '@testing-library/react';
import type { FC, ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { AppContext, createStore } from '@/app/store';
import { SessionApi } from '@/features/session';
import { Logger } from '@/shared/lib/types';

type RenderResult = RenderResultBase & {
  appContext: AppContext;
};

export const render = (
  ui: ReactElement,
  options?: RenderOptions,
): RenderResult => {
  const sessionApi: SessionApi = {
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
    <Provider store={store}>{children}</Provider>
  );

  return {
    ...renderBase(ui, {
      wrapper: AllTheProviders,
      ...options,
    }),
    appContext,
  };
};