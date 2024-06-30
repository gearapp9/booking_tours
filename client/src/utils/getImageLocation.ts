export const getImageLocation = (name: string, type?: string): string => {
  switch (type) {
    case "tour":
      return `/src/assets/tours/${name}`;

    case "user":
      return `/src/assets/users/${name}`;

    default:
      return `/src/assets/${name}`;
  }
};
