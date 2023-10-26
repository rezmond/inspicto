import type { Meta, StoryObj } from '@storybook/react';
import { RememberMe } from './RememberMe';

const meta = {
  title: 'components/RememberMe',
  component: RememberMe,
  tags: ['autodocs'],
} satisfies Meta<typeof RememberMe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstState: Story = {
  args: {
    label: 'Remember me',
  },
};
