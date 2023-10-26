import { slice } from './model';

export const userModel = {
  ...slice.actions,
  reducer: slice.reducer,
};

export { type User } from './model';
export { getUserName } from './lib';
