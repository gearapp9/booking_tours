import { JsonData } from "../models/JsonData";
import { Tour } from "../models/Tour/Tour";
import { getData } from "./getDataFunction";

export const getAllTours = async (searchQury:string|null): Promise<JsonData<Tour[]>> => {

  return await getData<JsonData<Tour[]>>(searchQury ? `/api/v1/tours/${searchQury}` : "/api/v1/tours");
};

export const getTour = async (slug: string): Promise<JsonData<Tour>> => {
  return await getData<JsonData<Tour>>(`/api/v1/tours/tour/${slug}`);
};
