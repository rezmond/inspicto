import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    login: (state, action: PayloadAction<number>) => {
      Object.assign(state, action.payload);
    },
  },
});
