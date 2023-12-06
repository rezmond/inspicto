export type ContextScope = 'api' | 'logger';

export type Logger = {
  error(error: Error): void;
};
