import { NextPage } from "next";

import styles from "./page.module.scss";
import { BookmarkedMovies } from "@/screens/bookmarks/BookmarkedMovies";
import { BookmarkedSeries } from "@/screens/bookmarks/BookmarkedSeries";

const BookmarksPage: NextPage = () => {
    return (
        <>
            <BookmarkedMovies className={styles.moviesSection} />
            <BookmarkedSeries />
        </>
    );
};

export default BookmarksPage;
