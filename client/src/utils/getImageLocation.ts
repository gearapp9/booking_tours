export const getImageLocation = (name: string, type?: string): string => {
  switch (type) {
    case "tour":
      return `https://booking-tours-server.vercel.app/tours/${name}`;

    case "user":
      return `https://booking-tours-server.vercel.app/users/${name}`;

    default:
      return `https://booking-tours-server.vercel.app/${name}`;
  }
};
