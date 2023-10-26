import { configureStore } from '@reduxjs/toolkit';
import { userModel } from '@/entities/user';

export const createStore = () =>
  configureStore({
    devTools: {
      name: 'inspicto',
    },
    reducer: {
      user: userModel.reducer,
    },
  });
