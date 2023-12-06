import type { Action } from '@reduxjs/toolkit';
import {
  type GetContextEffect,
  getContext as getContextBase,
  all as allBase,
  put as putBase,
  call as callBase,
  takeLeading as takeLeadingBase,
} from 'redux-saga/effects';
import type { EntityToStore } from '../model';

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

export const call = callBase;
export const takeLeading = takeLeadingBase;
