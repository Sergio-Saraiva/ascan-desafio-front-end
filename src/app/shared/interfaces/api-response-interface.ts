export interface APIResponseInterface<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}
