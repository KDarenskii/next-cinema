import { NextPage } from "next";

import { BookmarkedMovies } from "@/components/screens/bookmarks/BookmarkedMovies";
import { BookmarkedSeries } from "@/components/screens/bookmarks/BookmarkedSeries";

import styles from "./page.module.scss";

const BookmarksPage: NextPage = () => {
    return (
        <>
            <BookmarkedMovies className={styles.moviesSection} />
            <BookmarkedSeries />
        </>
    );
};

export default BookmarksPage;
