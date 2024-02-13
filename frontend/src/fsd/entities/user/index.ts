import { toEntityActions } from '@/shared/lib';
import { type User, slice } from './model';

export const userModel = {
  ...slice.actions,
  signUp: toEntityActions<User>(slice.actions.signIn),
  signIn: toEntityActions<User>(slice.actions.signIn),
  reducer: slice.reducer,
};

export { type User } from './model';
export { getUserName } from './lib';
