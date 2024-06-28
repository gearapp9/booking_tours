import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOUR, TourState } from "../../models/Tour/TourTypes";
import { Tour } from "../../models/Tour/Tour";

const INITIAL_STATE: TourState = {
  data: [],
  isLoading: false,
  error: null,
};

const tourSlice = createSlice({
  name: TOUR,
  initialState: INITIAL_STATE,
  reducers: {
    /* prettier-ignore    */
    getAllToursAction: (state: TourState) => {
      state.isLoading = true;
    },
    /* prettier-ignore    */
    getAllToursActionSuccess:(state:TourState,{payload}:PayloadAction<Tour[]>)=>{
        state.isLoading = false
        state.data = payload
    },
    /* prettier-ignore    */
    getAllToursActionFailed:(state:TourState,{payload}:PayloadAction<Error>)=>{
        state.isLoading = false,
        state.error = payload
    },
  },
});

export const tourReducer = tourSlice.reducer;

/* prettier-ignore    */
export const { getAllToursAction,getAllToursActionFailed,getAllToursActionSuccess } =tourSlice.actions;
