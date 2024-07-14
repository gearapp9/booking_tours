import { JsonData } from "../models/JsonData";
import { Tour } from "../models/Tour/Tour";
import { getData } from "./getDataFunction";

export const getAllTours = async (searchQury:string|null): Promise<JsonData<Tour[]>> => {

  return await getData<JsonData<Tour[]>>(searchQury ? `https://booking-tours-server.vercel.app/api/v1/tours/${searchQury}` : "https://booking-tours-server.vercel.app/api/v1/tours");
};

export const getTour = async (slug: string): Promise<JsonData<Tour>> => {
  return await getData<JsonData<Tour>>(`https://booking-tours-server.vercel.app/api/v1/tours/tour/${slug}`);
};
