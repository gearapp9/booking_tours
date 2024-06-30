import { createSelector } from "reselect";
import { RootState } from "../root_reducer";

const selectTourReducer = (state: RootState) => state.tour;

export const selectAllToursData = createSelector(
  [selectTourReducer],
  (tour) => tour.tours.data
);

export const selectTour = createSelector(
  [selectTourReducer],
  (tour) => tour.tour.data
);

export const selectAllToursIsLoading = createSelector(
  [selectTourReducer],
  (tour) => tour.tours.isLoading
);

export const selectTourIsLoading = createSelector(
  [selectTourReducer],
  (tour) => tour.tour.isLoading
);
