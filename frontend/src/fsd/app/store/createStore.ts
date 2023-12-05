import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { sessionApi } from '@/features/session';
import { userModel } from '@/entities/user';
import { axiosClient } from '@/shared/lib/axios';
import { ContextScope } from '@/shared/lib/types';
import { rootSaga } from './rootSaga';

const appContext = {
  api: {
    session: sessionApi.createMain(axiosClient),
  },
} satisfies Record<ContextScope, unknown>;

const sagaMiddleware = createSagaMiddleware({
  context: appContext,
});

export const createStore = () => {
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
