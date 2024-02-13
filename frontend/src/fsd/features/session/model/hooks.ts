'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/shared/lib';
import { getUserEntity } from '@/shared/model';

import type { SessionService } from '../types';
import { requestSignUp, requestSignIn } from './actions';

export const useSession = (): SessionService => {
  // TODO: convert to useAppDispatch
  const dispatch = useDispatch();
  const router = useRouter();
  const userEntity = useAppSelector(getUserEntity);
  const isUserLoaded = userEntity.status === 'fulfilled';

  useEffect(() => {
    if (isUserLoaded) {
      // we suppose that hook can be used only on sign-in or sign-up page
      // so we can redirect to the home page from here
      router.push('/');
    }
  }, [router, isUserLoaded]);

  return {
    signUp: (credentials) => {
      dispatch(requestSignUp(credentials));
    },
    signIn: (credentials) => {
      dispatch(requestSignIn(credentials));
    },
    isUserLoading: userEntity.status === 'pending',
  };
};
