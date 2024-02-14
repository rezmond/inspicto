import type { AxiosResponse } from 'axios';
import type { User } from '@/entities/user';

export type Credentials = {
  email: string;
  password: string;
};

export interface SignUpDetails {
  email: string;
  firstName: string;
  lastName: string;
  login: string;
  password: string;
}

export type SignedInResponse = AxiosResponse<User>;
export type SignedUpResponse = AxiosResponse<User>;

export type SessionService = {
  signUp: (credentials: SignUpDetails) => void;
  signIn: (credentials: Credentials) => void;
  isUserLoading: boolean;
};
