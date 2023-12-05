import { useDispatch } from 'react-redux';

import type { SessionService } from '../types';
import { requestSignIn } from './actions';

export const useSession = (): SessionService => {
  const dispatch = useDispatch();

  return {
    singIn: (credentials) => {
      dispatch(requestSignIn(credentials));
    },
  };
};
