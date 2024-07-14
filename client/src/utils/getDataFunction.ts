export const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(`https://booking-tours-server-n8h1.onrender.com/${url}`);
  return await response.json();
};
