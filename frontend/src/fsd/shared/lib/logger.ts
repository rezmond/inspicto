import { Logger } from './types';

export const localLogger: Logger = {
  error(error: Error) {
    console.error(error.message);
  },
};
