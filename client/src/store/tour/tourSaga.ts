import { takeLatest, put, all, call } from "typed-redux-saga";
import { ALL_TOURS_ACTION } from "../../models/Tour/TourTypes";
import { getAllTours } from "../../utils/ToursApiCalls";
import { getAllToursActionFailed, getAllToursActionSuccess } from "./tourReducer";

function* fetchAllToursAsync() {
  try {
    const toursData = yield* call(getAllTours);
    yield put(
      getAllToursActionSuccess(toursData.data?.doc ? toursData.data?.doc : [])
    );
    
  } catch (error) {
    yield put(getAllToursActionFailed(error as Error));
  }
}

function* onFetchAllTours() {
  yield* takeLatest(ALL_TOURS_ACTION, fetchAllToursAsync);
}

export function* tourSaga() {
  yield* all([call(onFetchAllTours)]);
}
