import type { AxiosStatic } from 'axios';

import { SessionApi } from './model';
import type { Credentials, SignedInResponse } from './types';

export const createMain = (client: AxiosStatic): SessionApi => ({
  signIn: (data: Credentials): Promise<SignedInResponse> =>
    client.post('auth/sign-in', data),
});
