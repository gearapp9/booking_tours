import { takeLatest, put, all, call } from "typed-redux-saga";

import { ALL_TOURS_ACTION, TOUR_ACTION } from "../../models/Tour/TourTypes";
import { getAllTours, getTour } from "../../utils/toursApiCalls";
import {
  getAllToursActionFailed,
  getAllToursActionSuccess,
  getTourActionFailed,
  getTourActionSuccess,
} from "./tourReducer";
import { PayloadAction } from "@reduxjs/toolkit";
import { Tour } from "../../models/Tour/Tour";

function* fetchAllToursAsync({payload:searchQuery}:PayloadAction<string|null>) {
  try {
    const toursData = yield* call(getAllTours,searchQuery);
    yield* put(
      getAllToursActionSuccess(toursData.data?.doc ? toursData.data?.doc : [])
    );
  } catch (error) {    
    yield* put(getAllToursActionFailed(error as Error));
  }
}

function* fetchTourAsync({ payload: slug }: PayloadAction<string>) {
  try {
    const tour = yield* call(getTour, slug);
    yield* put(
      getTourActionSuccess(tour.data?.doc ? tour.data?.doc : ({} as Tour))
    );
  } catch (error) {
    yield* put(getTourActionFailed(error as Error));
  }
}

function* onFetchTour() {
  yield* takeLatest(TOUR_ACTION, fetchTourAsync);
}

function* onFetchAllTours() {
  yield* takeLatest(ALL_TOURS_ACTION, fetchAllToursAsync);
}

export function* tourSaga() {
  yield* all([call(onFetchAllTours), call(onFetchTour)]);
}
