export interface JsonData<T> {
  status: string;
  results?: number;
  token?:string
  session?:T
  data?: { doc: T } | null;
}
