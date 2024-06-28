import { User } from "../user/User";

type Location = {
  type: string;
  coordinates: number[];
  address: string;
  description: string;
};

export interface Tour {
  id: string;
  name: string;
  slug: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
  priceDiscount: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  secretTour: boolean;
  createdAt: Date;
  startDates: Date[];
  guides: User[];
  startLocation: Location;
  locations: Location[];
}
