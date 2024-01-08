import type { AxiosInstance } from 'axios';

import { SessionApi } from './model';
import type {
  Credentials,
  SignUpDetails,
  SignedInResponse,
  SignedUpResponse,
} from './types';

export const createMain = (client: AxiosInstance): SessionApi => ({
  signUp: (data: SignUpDetails): Promise<SignedUpResponse> =>
    client.post('v1/auth/sign-up', data),
  signIn: (data: Credentials): Promise<SignedInResponse> =>
    client.post('v1/auth/sign-in', data),
});
