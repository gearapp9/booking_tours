import { combineReducers } from "@reduxjs/toolkit";
import { tourReducer } from "./tour/tourReducer";


export const rootReducer = combineReducers({
    tour:tourReducer
})

export type RootState = ReturnType<typeof rootReducer>