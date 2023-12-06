import { PayloadAction } from '@reduxjs/toolkit';

import { type User, userModel } from '@/entities/user';
import {
  call,
  apiCall,
  getContext,
  putEntity,
  takeLeading,
} from '@/shared/lib/reduxSaga';

import type { Credentials, SignedInResponse } from '../types';
import { requestSignIn } from './actions';
import { SessionApi } from './interfaces';

function* signInSaga(user: User) {
  yield putEntity(userModel.signIn, user);
}

function* requestSignInSaga({
  payload: credentials,
}: PayloadAction<Credentials>) {
  const api: { session: SessionApi } = yield getContext('api');

  const response: SignedInResponse | undefined = yield* apiCall(
    api.session.signIn(credentials),
    userModel.signIn,
  );

  if (!response) {
    return;
  }

  if (response.status === 401) {
    yield putEntity.error(userModel.signIn, 'Unauthorized');
  }

  yield call(signInSaga, response.data);
}

export function* saga() {
  yield takeLeading(requestSignIn.type, requestSignInSaga);
}
