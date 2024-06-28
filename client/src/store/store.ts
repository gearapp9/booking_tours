import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root_reducer";
import createSagaMiddleWare from "redux-saga"
import { rootSaga } from "./root_saga";

const sagaMiddleware = createSagaMiddleWare()


export const store = configureStore({
  reducer: rootReducer,
  middleware:(gDM) => gDM().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga)
