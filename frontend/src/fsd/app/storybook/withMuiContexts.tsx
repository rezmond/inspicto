import type { Decorator } from '@storybook/react';
import { ClientProviders } from '@/app';

export const withMuiContexts: Decorator = (Story) => (
  <ClientProviders>
    <Story />
  </ClientProviders>
);
