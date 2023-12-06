import type { Action } from '@reduxjs/toolkit';
import {
  type GetContextEffect,
  getContext as getContextBase,
  all as allBase,
  put as putBase,
  call as callBase,
  takeLeading as takeLeadingBase,
} from 'redux-saga/effects';
import type { EntityToLoad, EntityToStore, StoredEntity } from '../model';
import { ContextScope, Logger } from './types';

export const getContext = (prop: ContextScope): GetContextEffect =>
  getContextBase(prop);

export const all = allBase;
export const put = putBase;
export const putEntity = <
  TData,
  P extends EntityToStore<TData>,
  TActionCreator extends (payload: P) => Action,
>(
  actionCreator: TActionCreator,
  data: TData,
) => put(actionCreator({ status: 'fulfilled', data } as P));

putEntity.isLoading = <
  P extends EntityToLoad,
  TActionCreator extends (payload: P) => never,
>(
  actionCreator: TActionCreator,
) => put(actionCreator({ status: 'pending' } as P));

putEntity.error = <P extends StoredEntity<unknown>>(
  actionCreator: (payload: P) => Action,
  error: string,
) => put(actionCreator({ status: 'error', error } as P));

export const call = callBase;
export const takeLeading = takeLeadingBase;

export function* apiCall<
  T,
  P extends never,
  TActionCreator extends (payload: StoredEntity<P>) => Action,
>(requestPromise: Promise<T>, actionCreator: TActionCreator) {
  const logger: Logger = yield getContext('logger');
  let response: T;
  try {
    response = yield requestPromise;
  } catch (error: unknown) {
    if (!(error instanceof Error)) {
      throw new Error('Unexpected error', { cause: error });
    }

    logger.error(error);
    yield putEntity.error(actionCreator, error.message);
    return;
  }

  return response;
}
