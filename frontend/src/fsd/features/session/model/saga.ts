import { PayloadAction } from '@reduxjs/toolkit';

import { type User, userModel } from '@/entities/user';
import {
  call,
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
  const { data, status, ...rest }: SignedInResponse =
    yield api.session.signIn(credentials);
  if (status === 401) {
    // TODO: implement error handling
    throw new Error(JSON.stringify(rest));
  }

  yield call(signInSaga, data);
}

export function* saga() {
  yield takeLeading(requestSignIn.type, requestSignInSaga);
}
