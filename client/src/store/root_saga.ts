import { all, call } from "typed-redux-saga";
import { tourSaga } from "./tour/tourSaga";

export function* rootSaga() {
  yield* all([call(tourSaga)]);
}
