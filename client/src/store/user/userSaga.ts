import { call, all, takeLatest, put } from "typed-redux-saga";
import { GET_USER_ACTION, UserFormData } from "../../models/user/userTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import { sendData } from "../../utils/sendDataFunction";
import { login } from "../../utils/userApiCalls";
import { getUserActionFailed, getUserActionSuccess } from "./userReducer";
import { User } from "../../models/user/User";

function* FetchUserAsync({
  payload: { email, password },
}: PayloadAction<UserFormData>) {
  try {
    const user = yield* call(login, email, password);
       
    yield* put(
      getUserActionSuccess(user.data?.doc ? user.data?.doc : ({} as User))
    );
  } catch (error) {
    yield* put(getUserActionFailed(error as Error));
  }
}

function* onFetchUser() {
  yield* takeLatest(GET_USER_ACTION, FetchUserAsync);
}

export function* userSaga() {
  yield* all([call(onFetchUser)]);
}
