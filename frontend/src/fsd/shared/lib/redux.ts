import type { Action } from '@reduxjs/toolkit';

import { StoredEntity } from '../model';

export interface EntityActionCreator<TEntity> {
  (p: TEntity): Action;
  error: (message: string) => Action;
  isLoading: () => Action;
}

export const toEntityActions = <
  TEntity,
  TPayload extends StoredEntity<TEntity> = StoredEntity<TEntity>,
  TActionCreator extends (payload: TPayload) => Action = (
    payload: TPayload,
  ) => Action,
>(
  actionCreator: TActionCreator,
): EntityActionCreator<TEntity> => {
  const newCreator = (data: TEntity) =>
    actionCreator({
      status: 'fulfilled',
      data,
      error: undefined,
    } as TPayload);
  newCreator.isLoading = () =>
    actionCreator({
      status: 'pending',
      data: undefined,
      error: undefined,
    } as TPayload);
  newCreator.error = (message: string) =>
    actionCreator({
      status: 'error',
      data: undefined,
      error: message,
    } as TPayload);
  return newCreator;
};
