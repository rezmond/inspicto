import type { AxiosResponse } from 'axios';
import { User } from '@/entities/user';

export type Credentials = {
  email: string;
  password: string;
};

export type SignedInResponse = AxiosResponse<User>;

export type SessionService = {
  signIn: (credentials: Credentials) => void;
};
