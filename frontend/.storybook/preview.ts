import { withMuiContexts } from '../src/utils/storybook/decorators/withMuiContexts';
import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withMuiContexts
  ]
};

export default preview;