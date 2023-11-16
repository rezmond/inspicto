import type { User } from './model';

// TODO: rename the file
export const getUserName = ({ firstName, lastName, login, email }: User) => {
  if (firstName || lastName) {
    return [firstName, lastName].join(' ');
  }

  return login || email;
};
