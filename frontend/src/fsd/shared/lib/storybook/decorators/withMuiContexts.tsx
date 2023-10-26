import type { Decorator } from '@storybook/react';
import { CssVarsProvider } from '../../../../features/providers/lib/CssVarsProvider';
import { theme } from '../../../../features/providers/lib/theme';

export const withMuiContexts: Decorator = (Story) => (
  <CssVarsProvider theme={theme}>
    <Story />
  </CssVarsProvider>
);
