import { combineReducers } from "@reduxjs/toolkit";
import { tourReducer } from "./tour/tourReducer";
import { userReducer } from "./user/userReducer";


export const rootReducer = combineReducers({
    tour:tourReducer,
    user:userReducer
})

export type RootState = ReturnType<typeof rootReducer>