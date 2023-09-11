import { createSelector } from "@reduxjs/toolkit";

import { IMovie } from "@/types/movie.interface";
import { ISeries } from "@/types/series.interface";

import { RootState } from "../store";

export const selectBookmarkById = (state: RootState, id: number) => {
    return state.bookmarks.list.find((bookmark) => bookmark.id === id) ?? null;
};

export const selectBookmarks = (state: RootState) => {
    return state.bookmarks.list;
};

export const selectBookmarkedMovies = createSelector(
    selectBookmarks,
    (bookmarks) => {
        return bookmarks.filter(
            (bookmark): bookmark is IMovie => "video" in bookmark,
        );
    },
);

export const selectBookmarkedSeries = createSelector(
    selectBookmarks,
    (bookmarks) => {
        return bookmarks.filter(
            (bookmark): bookmark is ISeries => !("video" in bookmark),
        );
    },
);
