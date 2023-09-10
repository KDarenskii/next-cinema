import { RootState } from "..";

import { IMovie, ISeries } from "@/types/motion.interface";

export const selectBookmark = (state: RootState, id: number) => {
    return state.bookmarks.list.find((bookmark) => bookmark.id === id) ?? null;
};
export const selectBookmarksList = (state: RootState) => {
    const movies: IMovie[] = [];
    const series: ISeries[] = [];
    state.bookmarks.list.forEach((bookmark) => {
        if ("video" in bookmark) {
            movies.push(bookmark);
        } else {
            series.push(bookmark);
        }
    });

    return { movies, series };
};
