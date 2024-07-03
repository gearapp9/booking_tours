import { JsonData } from "../models/JsonData";
import { User } from "../models/user/User";
import { getData } from "./getDataFunction";
import { sendData } from "./sendDataFunction";

export const login = async (
  email: string,
  password: string
): Promise<JsonData<User>> => {
  return await sendData<{ email: string; password: string }, JsonData<User>>(
    "/api/v1/users/signin",
    { email, password },
    "POST"
  );
};

export const logOut = async (): Promise<JsonData<null>> => {
  return await getData<JsonData<null>>("/api/v1/users/signout");
};

export const UpdateUserEN = async (name: string, email: string) => {
  return await sendData<{ name: string; email: string }, JsonData<User>>(
    "/api/v1/users/updateme",
    { name, email },
    "PATCH"
  );
};

export const updateUserPassword = async (
  currentPassword: string,
  password: string,
  passwordConfirm: string,
): Promise<void> => {
  await sendData<
    { passwordConfirm: string; password: string; currentPassword: string },
    JsonData<User>
  >("/api/v1/users/updatepass", { currentPassword, password, passwordConfirm }, "PATCH");
};
