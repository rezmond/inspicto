import type { AxiosStatic } from 'axios';

import { SessionApi } from './model';
import type {
  Credentials,
  SignUpDetails,
  SignedInResponse,
  SignedUpResponse,
} from './types';

export const createMain = (client: AxiosStatic): SessionApi => ({
  signUp: (data: SignUpDetails): Promise<SignedUpResponse> =>
    client.post('auth/sign-up', data),
  signIn: (data: Credentials): Promise<SignedInResponse> =>
    client.post('auth/sign-in', data),
});
