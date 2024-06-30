import { Tour } from "./Tour";

type AllToursType = {
  data: Tour[] | null;
  isLoading: boolean;
  error: Error | null;
};

type OneTourType = {
  data: Tour | null;
  isLoading: boolean;
  error: Error | null;
};



export type TourState ={
  tours:AllToursType
  tour:OneTourType
}


export const TOUR = "tour";
export type TOUR = typeof TOUR;

export const TOUR_ACTION = `${TOUR}/getTourAction`;
export type TOUR_ACTION = typeof TOUR_ACTION;
export const ALL_TOURS_ACTION = `${TOUR}/getAllToursAction`;
export type ALL_TOURS_ACTION = typeof ALL_TOURS_ACTION;
