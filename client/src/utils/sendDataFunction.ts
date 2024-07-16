import axios, {  AxiosRequestConfig, RawAxiosRequestHeaders } from "axios";
axios.defaults.withCredentials = true;
export const sendData = async <D, T>(
  url: string,
  data: D,
  method: string,
  headers: RawAxiosRequestHeaders
): Promise<T> => {
  const config: AxiosRequestConfig = {
    method,
    url:`https://booking-tours-server-n8h1.onrender.com${url}`,
    data,
    headers,
  };

  const response = await axios(config)
  return response.data;
};
