import { call, all, takeLatest, put } from "typed-redux-saga";
import {
  GET_USER_ACTION,
  SIGN_OUT_USER,
  UPDATE_USER_NAME_EMAIL,
  UPDATE_USER_PASSWORD,
} from "../../models/user/userTypes";
import { PayloadAction } from "@reduxjs/toolkit";

import { updateUserEN, logOut, login, updateUserPassword } from "../../utils/userApiCalls";
import {
  SignOutUserActionFailed,
  SignOutUserActionSuccess,
  getUserActionFailed,
  getUserActionSuccess,
  updateUserENActionFailed,
  updateUserENActionSuccess,
  updateUserPasswordActionFailed,
  updateUserPasswordActionSuccess,
} from "./userReducer";
import { User } from "../../models/user/User";

function* FetchUserAsync({
  payload: { email, password },
}: PayloadAction<{ email: string; password: string }>) {
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

function* UpdateUserENAsync({
  payload: { name, email,photo },
}: PayloadAction<{ name: string; email: string,photo: File }>) {
  try {
   
    const user = yield* call(updateUserEN, name, email,photo);
    
    
    
    yield* put(
      updateUserENActionSuccess(user.data?.doc ? user.data?.doc : null)
    );
  } catch (error) {
    yield* put(updateUserENActionFailed(error as Error));
  }
}

function* updateUserPasswordAsync({
  payload:{currentPassword,password,passwordConfirm},
}: PayloadAction<{
  currentPassword: string;
  password: string;
  passwordConfirm: string;
}>) {

  try {
    yield* call(updateUserPassword,currentPassword,password,passwordConfirm)
    yield* put(updateUserPasswordActionSuccess())
  } catch (error) {
    
    console.log(error);
    yield* put(updateUserPasswordActionFailed(error as Error))
    
  }

}

function* onUpdateUserPassword() {
  yield* takeLatest(UPDATE_USER_PASSWORD, updateUserPasswordAsync);
}

function* onUpdateUserEN() {
  yield* takeLatest(UPDATE_USER_NAME_EMAIL, UpdateUserENAsync);
}

function* onSignOutUser() {
  yield* takeLatest(SIGN_OUT_USER, onSignOutUserAsync);
}

function* onFetchUser() {
  yield* takeLatest(GET_USER_ACTION, FetchUserAsync);
}

export function* userSaga() {
  yield* all([
    call(onFetchUser),
    call(onSignOutUser),
    call(onUpdateUserEN),
    call(onUpdateUserPassword),
  ]);
}
