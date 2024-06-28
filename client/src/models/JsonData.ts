export interface JsonData<T> {
  status: string;
  results?: number;
  data: { doc: T } | null;
}
