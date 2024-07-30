import React from 'react';
import type { Decorator } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import { AppRouterContext, type AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const handleRouterCall: ProxyHandler<{}> = {
  get(_target, prop, _receiver) {
    action(`NextJs navigation through the "${String(prop)}" method`);
    return () => {};
  },
}

const observedRouterContext = new Proxy({}, handleRouterCall) as AppRouterInstance;

export const withNextContexts: Decorator = (Story) =>(
    <AppRouterContext.Provider
      value={observedRouterContext}
    >
      <Story />
    </AppRouterContext.Provider>
  );
