import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { SessionApi } from '@/features/session';
import { userModel } from '@/entities/user';
import type { Logger } from '@/shared/lib/types';

import { rootSaga } from './rootSaga';

export type AppContext = {
  api: {
    session: SessionApi;
  };
  logger: Logger;
};

export const createStore = (appContext: AppContext) => {
  const sagaMiddleware = createSagaMiddleware({
    context: appContext,
  });

  const store = configureStore({
    devTools: {
      name: 'inspicto',
    },
    reducer: {
      user: userModel.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
