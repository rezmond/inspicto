import React from 'react';
import type { Decorator } from '@storybook/react';

import { CssVarsProvider, appTheme } from '../../src/fsd/app';

export const withMuiContexts: Decorator = (Story) => (
  <CssVarsProvider theme={appTheme}><Story /></CssVarsProvider>
);
