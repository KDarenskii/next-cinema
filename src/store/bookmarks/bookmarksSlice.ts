import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type BookmarkState = {
    list: IMotion[];
};

const initialState: BookmarkState = {
    list: [],
};

const bookmarksSlice = createSlice({
    name: "bookmarks",
    initialState,
    reducers: {
        addBookmark(state, action: PayloadAction<IMotion>) {
            state.list.push(action.payload);
        },
        removeBookmark(state, action: PayloadAction<number>) {
            state.list.filter(({ id }) => id !== action.payload);
        },
    },
});

export const { addBookmark, removeBookmark } = bookmarksSlice.actions;

export default bookmarksSlice.reducer;
