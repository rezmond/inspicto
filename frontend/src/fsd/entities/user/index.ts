import { toEntityActions } from '@/shared/lib';
import { User, slice } from './model';

export const userModel = {
  ...slice.actions,
  signIn: toEntityActions<User>(slice.actions.signIn),
  reducer: slice.reducer,
};

export { type User } from './model';
export { getUserName } from './lib';
