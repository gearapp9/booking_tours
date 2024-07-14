import axios, {  AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";

export const sendData = async <D, T>(
  url: string,
  data: D,
  method: string,
  headers: RawAxiosRequestHeaders
): Promise<T> => {
  const config: AxiosRequestConfig = {
    method,
    url:`https://booking-tours-server.vercel.app${url}`,
    data,
    headers,
  };

  const response = await axios(config)
  return response.data;
};
