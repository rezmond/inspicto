export type Logger = {
  error(error: Error): void;
};

export const localLogger: Logger = {
  error(error: Error) {
    console.error(error.message);
  },
};
