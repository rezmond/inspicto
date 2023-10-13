import { CssVarsProvider } from '@/libs/mui/CssVarsProvider';
import { theme } from '@/libs/mui/theme';

import type { Decorator } from '@storybook/react';

export const withMuiContexts: Decorator = (Story) => (
  <CssVarsProvider theme={theme}>
    <Story />
  </CssVarsProvider>
);
