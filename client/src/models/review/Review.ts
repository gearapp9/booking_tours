import { Tour } from "../Tour/Tour";
import { User } from "../user/User";

export interface Review{
    id:string,
    review:string,
    rating:number,
    createdAt:Date,
    tour:Tour
    user:User
}

