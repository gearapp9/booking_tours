import { JsonData } from "../models/JsonData";
import { Tour } from "../models/Tour/Tour";
import { getData } from "./getDataFunction";

export const getAllTours = async (): Promise<JsonData<Tour[]>> => {
  
  return await getData<JsonData<Tour[]>>("/api/v1/tours");
};
