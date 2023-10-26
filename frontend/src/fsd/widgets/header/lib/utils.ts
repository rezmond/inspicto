import { User } from './types';

export const getUserName = ({ firstName, lastName, login, email }: User) => {
  if (firstName || lastName) {
    return [firstName, lastName].join(' ');
  }

  return login || email;
};
