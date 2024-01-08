import { useDispatch } from 'react-redux';

import type { SessionService } from '../types';
import { requestSignUp, requestSignIn } from './actions';

export const useSession = (): SessionService => {
  const dispatch = useDispatch();

  return {
    signUp: (credentials) => {
      dispatch(requestSignUp(credentials));
    },
    signIn: (credentials) => {
      dispatch(requestSignIn(credentials));
    },
  };
};
