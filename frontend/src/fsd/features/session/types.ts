import type { AxiosResponse } from 'axios';
import { User } from '@/entities/user';

export type Credentials = {
  email: string;
  password: string;
};

export type SignUpDetails = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

export type SignedInResponse = AxiosResponse<User>;
export type SignedUpResponse = AxiosResponse<User>;

export type SessionService = {
  signUp: (credentials: SignUpDetails) => void;
  signIn: (credentials: Credentials) => void;
};
