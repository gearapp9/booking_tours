import { JsonData } from "../models/JsonData";
import { User } from "../models/user/User";
import { getData } from "./getDataFunction";
import { sendData } from "./sendDataFunction";

export const login = async (
  email: string,
  password: string
): Promise<JsonData<User>> => {
  return await sendData("/api/v1/users/signin", { email, password });
};

export const logOut = async (): Promise<JsonData<null>> => {
  return await getData<JsonData<null>>("/api/v1/users/signout");
};
