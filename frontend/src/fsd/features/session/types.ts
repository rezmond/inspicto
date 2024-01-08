import type { AxiosResponse } from 'axios';
import type { CreateUserDto } from 'inspicto-backend';
import { User } from '@/entities/user';

export type Credentials = {
  email: string;
  password: string;
};

export type SignUpDetails = CreateUserDto;

export type SignedInResponse = AxiosResponse<User>;
export type SignedUpResponse = AxiosResponse<User>;

export type SessionService = {
  signUp: (credentials: SignUpDetails) => void;
  signIn: (credentials: Credentials) => void;
};
