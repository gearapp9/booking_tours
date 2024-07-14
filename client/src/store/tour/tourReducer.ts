import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOUR, TourState } from "../../models/Tour/TourTypes";
import { Tour } from "../../models/Tour/Tour";

const INITIAL_STATE: TourState = {
  tour: {
    data: null,
    isLoading: false,
    error: null,
  },
  tours: {
    data: null,
    isLoading: false,
    error: null,
  },
};

const tourSlice = createSlice({
  name: TOUR,
  initialState: INITIAL_STATE,
  reducers: {
    /* prettier-ignore    */
    getAllToursAction: (state: TourState,{payload:_}:PayloadAction<string|null>) => {
      state.tours.isLoading = true;
    },
    /* prettier-ignore    */
    getAllToursActionSuccess:(state:TourState,{payload}:PayloadAction<Tour[]>)=>{
        state.tours.isLoading = false
        state.tours.data = payload
    },
    /* prettier-ignore    */
    getAllToursActionFailed:(state:TourState,{payload}:PayloadAction<Error>)=>{
        state.tours.isLoading = false,
        state.tours.error = payload
    },

    //one single tour
    /* prettier-ignore    */
    getTourAction: (state: TourState,{payload}:PayloadAction<string>) => {
      state.tour.isLoading = true;
    },
    /* prettier-ignore    */
    getTourActionSuccess:(state:TourState,{payload}:PayloadAction<Tour>)=>{
      state.tour.isLoading = false;
      state.tour.data = payload
    },

    /* prettier-ignore    */
    getTourActionFailed:(state:TourState,{payload}:PayloadAction<Error>)=>{
      state.tour.isLoading=false
      state.tour.error = payload
    },
  },
});

export const tourReducer = tourSlice.reducer;

export const {
  getAllToursAction,
  getAllToursActionFailed,
  getAllToursActionSuccess,
  getTourAction,
  getTourActionFailed,
  getTourActionSuccess,
} = tourSlice.actions;
