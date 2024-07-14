export const getImageLocation = (name: string, type?: string): string => {
  switch (type) {
    case "tour":
      return `https://booking-tours-server-n8h1.onrender.com/tours/${name}`;

    case "user":
      return `https://booking-tours-server-n8h1.onrender.com/users/${name}`;

    default:
      return `https://booking-tours-server-n8h1.onrender.com/${name}`;
  }
};
