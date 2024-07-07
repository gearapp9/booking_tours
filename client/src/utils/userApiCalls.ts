import { JsonData } from "../models/JsonData";
import { User } from "../models/user/User";
import { getData } from "./getDataFunction";
import { sendData } from "./sendDataFunction";

export const login = async (
  email: string,
  password: string
): Promise<JsonData<User>> => {

  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  }

  return await sendData<{ email: string; password: string }, JsonData<User>>(
    "/api/v1/users/signin",
    { email, password },
    "POST",
    headers
  );
};

export const logOut = async (): Promise<JsonData<null>> => {
  return await getData<JsonData<null>>("/api/v1/users/signout");
};

export const updateUserEN = async (
  name: string,
  email: string,
  photo: File
) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("photo", photo);
  const headers= {
    'Content-Type': `multipart/form-data`,
  }
  return await sendData<
    FormData,
    JsonData<User>
  >("/api/v1/users/updateme", formData, "PATCH",headers);
};

export const updateUserPassword = async (
  currentPassword: string,
  password: string,
  passwordConfirm: string
): Promise<void> => {
  const headers = {
    "Content-type": "application/json; charset=UTF-8",
  }
  await sendData<
    { passwordConfirm: string; password: string; currentPassword: string },
    JsonData<User>
  >(
    "/api/v1/users/updatepass",
    { currentPassword, password, passwordConfirm },
    "PATCH",
    headers
  );
};


