import React from 'react';
import type { Decorator } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { Provider } from 'react-redux';

import { createStore, type AppContext } from '../../src/fsd/app';
import { SessionApi } from '../../src/fsd/features/session';
import type { Logger } from '../../src/fsd/shared/lib/types';

const sessionApi: SessionApi = {
  signIn: async (credentials) => {
    action('Sign in API call with')(credentials);
    return {
      status: 200,
      statusText: 'OK',
      data: credentials,
      headers: {},
      config: {} as any,
    }
  },
};
const logger: Logger = {
  error: action('Error log'),
};
const appContext: AppContext = {
  api: {
    session: sessionApi,
  },
  logger: logger,
};

export const withStateContext: Decorator = (Story) => {
  const store = createStore(appContext);

  return <Provider store={store}><Story/></Provider>
};
