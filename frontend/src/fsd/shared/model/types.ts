export type EntityToStore<T> = {
  status: 'fulfilled';
  data: T;
  error?: undefined;
};

export type EntityToLoad = {
  status: 'pending';
  data?: undefined;
  error?: undefined;
};

export type EntityLoadError = {
  status: 'error';
  error: string;
};

export type StoredEntity<T> = EntityToLoad | EntityToStore<T> | EntityLoadError;
