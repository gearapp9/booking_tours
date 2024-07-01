import { call, all, takeLatest, put } from "typed-redux-saga";
import {
  GET_USER_ACTION,
  SIGN_OUT_USER,
  UserFormData,
} from "../../models/user/userTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import { sendData } from "../../utils/sendDataFunction";
import { logOut, login } from "../../utils/userApiCalls";
import {
  SignOutUserActionFailed,
  SignOutUserActionSuccess,
  getUserActionFailed,
  getUserActionSuccess,
} from "./userReducer";
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

function* onSignOutUserAsync() {
  try {
    const userOut = yield* call(logOut);

    yield* put(
      SignOutUserActionSuccess(userOut.data?.doc ? userOut.data?.doc : null)
    );
  } catch (error) {
    yield* put(SignOutUserActionFailed(error as Error));
  }
}

function* onSignOutUser() {
  yield* takeLatest(SIGN_OUT_USER, onSignOutUserAsync);
}

function* onFetchUser() {
  yield* takeLatest(GET_USER_ACTION, FetchUserAsync);
}

export function* userSaga() {
  yield* all([call(onFetchUser), call(onSignOutUser)]);
}
