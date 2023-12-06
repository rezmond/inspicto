import { createStore } from '@/app/store';
import { SignInForm } from '@/features/session';
import { render } from '@/shared/lib/testUtils';

const formLabelId = 'form-label-id-1';
const renderSignInForm = () => {
  const utils = render(
    <div>
      <h1 id={formLabelId}>Form header</h1>
      <SignInForm aria-labelledby={formLabelId} />
    </div>,
    { store: createStore() },
  );

  return utils;
};

it('renders the SignInForm form accessible', () => {
  const { getByRole } = renderSignInForm();

  expect(getByRole('form')).toBeInTheDocument();
});
