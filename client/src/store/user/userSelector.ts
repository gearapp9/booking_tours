import { createSelector } from "reselect";
import { RootState } from "../root_reducer";

const selectUserReducer = (state: RootState) => state.user;

export const selectUser = createSelector(
  [selectUserReducer],
  (user) => user.user.data
);

export const selectIsLoading = createSelector(
  [selectUserReducer],
  (user) => user.user.isLoading
);
