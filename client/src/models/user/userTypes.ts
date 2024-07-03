import { User } from "./User";

export type UserType = {
  data: User | null;
  isLoading: boolean;
  error: Error | null;
};

export type UserState = {
  user: UserType;
};

export const USER = "user";
export type USER = typeof USER;

export const GET_USER_ACTION = `${USER}/getUserAction`;
export type GET_USER_ACTION = typeof GET_USER_ACTION;

export const SIGN_OUT_USER = `${USER}/SignOutUserAction`;
export type SIGN_OUT_USER = typeof SIGN_OUT_USER;

export const UPDATE_USER_NAME_EMAIL = `${USER}/updateUserENAction`;
export type UPDATE_USER_NAME_EMAIL = typeof UPDATE_USER_NAME_EMAIL;

export const UPDATE_USER_PASSWORD = `${USER}/updateUserPasswordAction`;
export type UPDATE_USER_PASSWORD = typeof UPDATE_USER_PASSWORD;
