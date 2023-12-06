import type { AnyAction, Store } from '@reduxjs/toolkit';
import {
  type RenderOptions as RenderOptionsBase,
  type RenderResult,
  render as renderBase,
} from '@testing-library/react';
import type { FC, ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';

type RenderOptions = Omit<RenderOptionsBase, 'queries'> & {
  store: Store<unknown, AnyAction>;
};

export const render = (
  ui: ReactElement,
  { store, ...options }: RenderOptions,
): RenderResult => {
  const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  return renderBase(ui, { wrapper: AllTheProviders, ...options });
};
