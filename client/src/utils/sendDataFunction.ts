export const sendData = async <D, T>(url: string, data: D): Promise<T> => {
  const response = await fetch(url, {
    // Adding method type
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify(data),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
};
