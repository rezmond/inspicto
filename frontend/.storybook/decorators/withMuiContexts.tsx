import React from 'react';
import type { Decorator } from '@storybook/react';
import { ClientProviders } from '../../src/fsd/app';

export const withMuiContexts: Decorator = (Story) => (
  <ClientProviders>
    <Story />
  </ClientProviders>
);
