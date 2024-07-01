import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root_reducer";
import createSagaMiddleWare from "redux-saga";
import { rootSaga } from "./root_saga";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import {} from "redux-persist";
import storage from "redux-persist/lib/storage";
const sagaMiddleware = createSagaMiddleWare();

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (gDM) =>
    gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
