import { combineReducers, configureStore } from "@reduxjs/toolkit";

import bookmarksReducer from "./bookmarks/bookmarksSlice";

const rootReducer = combineReducers({
    bookmarks: bookmarksReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
