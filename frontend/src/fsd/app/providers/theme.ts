'use client';
import { extendTheme } from '@/shared/lib/extendTheme';

export type Theme = ReturnType<typeof extendTheme>;

export const theme = extendTheme();
