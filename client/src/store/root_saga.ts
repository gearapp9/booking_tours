import { all, call } from "typed-redux-saga";
import { tourSaga } from "./tour/tourSaga";
import { userSaga } from "./user/userSaga";

export function* rootSaga() {
  yield* all([call(tourSaga), call(userSaga)]);
}
