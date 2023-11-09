import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';

const meta = {
  title: 'components/SignInForm',
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div>
      <h1 id="sign-in-header">Sign in page</h1>
      <Form {...args} />
    </div>
  ),
  args: {
    'aria-labelledby': 'sign-in-header',
  },
};
