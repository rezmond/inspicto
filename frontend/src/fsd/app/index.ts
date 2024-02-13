import type { AppContext } from './store';

export {
  CssVarsProvider,
  theme as appTheme,
  ClientProviders,
} from './providers';
export { createStore, type AppContext } from './store';

/* The global declaration is needed here to overcome the circular import restriction of FSD. The type "AppContext" is made based on lower level layers. Such the way the "ContextScope" can't be available on the "shared" layer, but in global declaration it can. */
declare global {
  export type ContextScope = keyof AppContext;
}
