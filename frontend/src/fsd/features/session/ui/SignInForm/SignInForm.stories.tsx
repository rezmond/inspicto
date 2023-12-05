import type { Meta, StoryObj } from '@storybook/react';
import { SignInForm } from './SignInForm';

const meta = {
  title: 'components/SignInForm',
  component: SignInForm,
  tags: ['autodocs'],
} satisfies Meta<typeof SignInForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div>
      <h1 id="sign-in-header">Sign in page</h1>
      <SignInForm {...args} />
    </div>
  ),
  args: {
    'aria-labelledby': 'sign-in-header',
  },
};
