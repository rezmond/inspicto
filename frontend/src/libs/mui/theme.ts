'use client';
import { extendTheme } from './extendTheme';

export type Theme = ReturnType<typeof extendTheme>;

export const theme = extendTheme();
