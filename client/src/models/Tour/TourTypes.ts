import { Tour } from "./Tour";

export type TourState = {
  data: Tour[] | null;
  isLoading: boolean;
  error: Error | null;
};

export const TOUR = "tour";
export type TOUR = typeof TOUR;

export const ALL_TOURS_ACTION = `${TOUR}/getAllToursAction`;
export type ALL_TOURS_ACTION = typeof ALL_TOURS_ACTION;
