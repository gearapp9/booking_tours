import { createSelector } from "reselect";
import { RootState } from "../root_reducer";

const selectTourReducer = (state: RootState) => state.tour;

export const selectAllToursData = createSelector(
  [selectTourReducer],
  (tour) => tour.data
);

export const selectTourIsLoading = createSelector(
  [selectTourReducer],
  (tour) => tour.isLoading
);
