import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageModule from "redux-persist/lib/storage/index.js";
import contactsReducer from "./contactsSlice";

const storage = storageModule.default;

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["contacts"],
};

const persistedReducer = persistReducer(
    persistConfig,
    contactsReducer
);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);