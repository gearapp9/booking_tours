import { User } from "./User";

export type UserType = {
  data: User | null;
  isLoading: boolean;
  error: Error | null;
};

export type UserState = {
  user: UserType;
};

export type UserFormData = {
  email: string;
  password: string;
};

export const USER = "user";
export type USER = typeof USER;

export const GET_USER_ACTION = `${USER}/getUserAction`;
export type GET_USER_ACTION = typeof GET_USER_ACTION;
