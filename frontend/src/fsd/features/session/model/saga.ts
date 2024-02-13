import { PayloadAction } from '@reduxjs/toolkit';

import { type User, userModel } from '@/entities/user';
import {
  call,
  apiCall,
  getContext,
  takeLeading,
  put,
} from '@/shared/lib/reduxSaga';

import type { Credentials, SignUpDetails, SignedInResponse } from '../types';
import { requestSignIn, requestSignUp } from './actions';
import type { SessionApi } from './interfaces';

function* signInSaga(user: User) {
  yield put(userModel.signIn(user));
}

function* requestSignInSaga({
  payload: credentials,
}: PayloadAction<Credentials>) {
  const api: { session: SessionApi } = yield getContext('api');

  const response: SignedInResponse | undefined = yield* apiCall(
    api.session.signIn(credentials),
    userModel.signIn.error,
  );

  if (!response) {
    return;
  }

  if (response.status === 401) {
    yield put(userModel.signIn.error('Unauthorized'));
  }

  // TODO: show other errors

  yield call(signInSaga, response.data);
}

function* requestSignUpSaga({
  payload: credentials,
}: PayloadAction<SignUpDetails>) {
  const api: { session: SessionApi } = yield getContext('api');

  yield put(userModel.signUp.isLoading());

  const response: SignedInResponse | undefined = yield* apiCall(
    api.session.signUp(credentials),
    userModel.signUp.error,
  );

  if (!response) {
    return;
  }

  // TODO: show other errors

  yield call(signInSaga, response.data);
}

export function* saga() {
  yield takeLeading(requestSignUp.type, requestSignUpSaga);
  yield takeLeading(requestSignIn.type, requestSignInSaga);
}
