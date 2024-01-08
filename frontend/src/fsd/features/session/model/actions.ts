import { createAction } from '@reduxjs/toolkit';
import { Credentials } from '../types';

export const requestSignUp = createAction<Credentials>('session/requestSignUp');
export const requestSignIn = createAction<Credentials>('session/requestSignIn');
