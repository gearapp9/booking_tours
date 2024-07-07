export const getImageLocation = (name: string, type?: string): string => {
  switch (type) {
    case "tour":
      return `http://127.0.0.1:3000/tours/${name}`;

    case "user":
      return `http://127.0.0.1:3000/users/${name}`;

    default:
      return `http://127.0.0.1:3000/${name}`;
  }
};
