import { SignInDto } from './types';

export const createAuthDto = (formData: FormData): SignInDto => ({
  email: formData.get('email') as string,
  password: formData.get('password') as string,
});
