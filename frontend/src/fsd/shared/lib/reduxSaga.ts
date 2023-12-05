import {
  type GetContextEffect,
  getContext as getContextBase,
  all as allBase,
  put as putBase,
  call as callBase,
  takeLeading as takeLeadingBase,
} from 'redux-saga/effects';
import { ContextScope } from './types';

export const getContext = (prop: ContextScope): GetContextEffect =>
  getContextBase(prop);

export const all = allBase;
export const put = putBase;
export const call = callBase;
export const takeLeading = takeLeadingBase;
