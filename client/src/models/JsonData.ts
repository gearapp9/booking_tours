export interface JsonData<T> {
  status: string;
  results?: number;
  token?:string
  data: { doc: T } | null;
}
