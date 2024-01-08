import type { Action } from '@reduxjs/toolkit';
import {
  type GetContextEffect,
  getContext as getContextBase,
  all as allBase,
  put as putBase,
  call as callBase,
  takeLeading as takeLeadingBase,
} from 'redux-saga/effects';
import { ContextScope, Logger } from './types';

export const getContext = (prop: ContextScope): GetContextEffect =>
  getContextBase(prop);

export const all = allBase;
export const put = putBase;
export const call = callBase;
export const takeLeading = takeLeadingBase;

export function* apiCall<T>(
  requestPromise: Promise<T>,
  errorActionCreator: (message: string) => Action,
) {
  const logger: Logger = yield getContext('logger');
  let response: T;
  try {
    response = yield requestPromise;
  } catch (error: unknown) {
    if (!(error instanceof Error)) {
      throw new Error('Unexpected error', { cause: error });
    }

    logger.error(error);
    yield putBase(errorActionCreator(error.message));
    return;
  }

  return response;
}
