import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { StoredEntity } from '@/shared/model/types';

import type { User } from './types';

export const slice = createSlice({
  name: 'user',
  initialState: {} as StoredEntity<User>,
  reducers: {
    signIn: (state, action: PayloadAction<StoredEntity<User>>) => {
      Object.assign(
        state,
        {
          data: undefined,
          error: undefined,
        },
        action.payload,
      );
    },
  },
});
