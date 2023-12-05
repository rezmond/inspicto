import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { User } from './types';

export const slice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    signIn: (state, action: PayloadAction<User>) => {
      Object.assign(state, action.payload);
    },
  },
});
