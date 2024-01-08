import type {
  Credentials,
  SignUpDetails,
  SignedInResponse,
  SignedUpResponse,
} from '../types';

export interface SessionApi {
  signUp(data: SignUpDetails): Promise<SignedUpResponse>;
  signIn(data: Credentials): Promise<SignedInResponse>;
}
