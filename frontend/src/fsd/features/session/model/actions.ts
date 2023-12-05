import { createAction } from '@reduxjs/toolkit';
import { Credentials } from '../types';

export const requestSignIn = createAction<Credentials>('session/requestSignIn');
