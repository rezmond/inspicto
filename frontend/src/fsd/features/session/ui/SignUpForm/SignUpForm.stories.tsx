import type { Meta, StoryObj } from '@storybook/react';
import { SignUpForm } from './SignUpForm';

const meta = {
  title: 'components/SignUpForm',
  component: SignUpForm,
  tags: ['autodocs'],
} satisfies Meta<typeof SignUpForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div>
      <h1 id="sign-in-header">Sign up page</h1>
      <SignUpForm {...args} />
    </div>
  ),
  args: {
    'aria-labelledby': 'sign-up-header',
  },
};
