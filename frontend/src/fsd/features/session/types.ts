import type { AxiosResponse } from 'axios';
import type { User } from '@/entities/user';

export interface Credentials {
  email: string;
  password: string;
}

export interface SignUpDetails extends Credentials {
  firstName: string;
  lastName: string;
  login: string;
}

export interface SignedInResponse extends AxiosResponse<User> {}
export interface SignedUpResponse extends AxiosResponse<User> {}

export interface SessionService {
  signUp: (credentials: SignUpDetails) => void;
  signIn: (credentials: Credentials) => void;
  isUserLoading: boolean;
}
