import { fireEvent } from '@testing-library/react';
import { SignInForm } from '@/features/session';
import { render } from '../../utils';

const formLabelId = 'form-label-id-1';
const renderSignInForm = () => {
  const utils = render(
    <div>
      <h1 id={formLabelId}>Form header</h1>
      <SignInForm aria-labelledby={formLabelId} />
    </div>,
  );

  return utils;
};

it('renders the SignInForm form accessible', () => {
  const { getByRole } = renderSignInForm();

  expect(getByRole('form')).toBeInTheDocument();
});

it('sends credentials to the server', () => {
  const email = 'mail@test.ts';
  const password = 'test-password';
  const { appContext, getByRole, getByLabelText } = renderSignInForm();

  const emailElement = getByRole('textbox', {
    name: /email address/i,
  });
  const passwordElement = getByLabelText(/password/i);
  const singInElement = getByRole('button', { name: /sign in/i });
  fireEvent.change(emailElement, { target: { value: email } });
  fireEvent.change(passwordElement, { target: { value: password } });
  fireEvent.click(singInElement);

  expect(appContext.api.session.signIn).toHaveBeenCalledTimes(1);
  expect(appContext.api.session.signIn).toHaveBeenCalledWith({
    email,
    password,
  });
  expect(appContext.logger.error).not.toHaveBeenCalled();
});
