import { Credentials, SignedInResponse } from '../types';

export interface SessionApi {
  signIn(data: Credentials): Promise<SignedInResponse>;
}
