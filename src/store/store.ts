import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import bookmarksReducer from "./bookmarks/bookmarksSlice";

const persistConfig = {
    key: "next-shop",
    storage,
    whitelist: ["bookmarks"],
};

const rootReducer = combineReducers({
    bookmarks: bookmarksReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REGISTER,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                ],
            },
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
