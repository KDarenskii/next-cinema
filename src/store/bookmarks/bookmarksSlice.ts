import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { TMotion } from "@/types/motion.type";

export type BookmarkState = {
    list: TMotion[];
};

const initialState: BookmarkState = {
    list: [],
};

const bookmarksSlice = createSlice({
    name: "bookmarks",
    initialState,
    reducers: {
        addBookmark(state, action: PayloadAction<TMotion>) {
            state.list.push(action.payload);
        },
        removeBookmark(state, action: PayloadAction<number>) {
            state.list = state.list.filter(({ id }) => id !== action.payload);
        },
    },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
