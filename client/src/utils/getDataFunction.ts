export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(`https://booking-tours-server.vercel.app${url}`);
  return await response.json();
};
