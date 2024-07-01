import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { USER, UserFormData, UserState } from "../../models/user/userTypes";
import { User } from "../../models/user/User";

const INITIAL_STATE: UserState = {
  user: {
    data: null,
    isLoading: false,
    error: null,
  },
};

const userSlice = createSlice({
  name: USER,
  initialState: INITIAL_STATE,
  reducers: {
    getUserAction: (
      state: UserState,
      { payload }: PayloadAction<UserFormData>
    ) => {
      state.user.isLoading = true;
    },
    /* prettier-ignore    */
    getUserActionSuccess: (state: UserState,{payload}:PayloadAction<User>) => {
        state.user.isLoading = false;
        state.user.data = payload
    },
    /* prettier-ignore    */
    getUserActionFailed: (state: UserState,{payload}:PayloadAction<Error>) => {
        state.user.isLoading = false;
        state.user.error = payload
    },

    SignOutUserAction: (state: UserState) => {
      state.user.isLoading = true;
    },
    /* prettier-ignore    */
    SignOutUserActionSuccess:(state:UserState,{payload}:PayloadAction<null>)=>{
      state.user.isLoading=false
      state.user.data = payload
    },
    /* prettier-ignore    */
    SignOutUserActionFailed:(state:UserState,{payload}:PayloadAction<Error>)=>{
      state.user.isLoading=false
      state.user.error = payload
    },
  },
});

export const userReducer = userSlice.reducer;
export const {
  getUserAction,
  getUserActionFailed,
  getUserActionSuccess,
  SignOutUserAction,
  SignOutUserActionFailed,
  SignOutUserActionSuccess,
} = userSlice.actions;
