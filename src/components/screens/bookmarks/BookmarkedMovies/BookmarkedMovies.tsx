"use client";

import { FC } from "react";

import { MediaList } from "@/components/MediaList";
import { SectionTitle } from "@/components/SectionTitle";
import { Alert } from "@/components/ui/Alert";

import { selectBookmarkedMovies } from "@/store/bookmarks/selectors";

import useTypedSelector from "@/hooks/useTypedSelector";

import styles from "./bookmarkedMovies.module.scss";

interface Props {
    className?: string;
}

const BookmarkedMovies: FC<Props> = ({ className }) => {
    const movies = useTypedSelector(selectBookmarkedMovies);

    return (
        <section className={className}>
            <SectionTitle className={styles.title}>
                Bookmarked movies
            </SectionTitle>
            <MediaList mediaList={movies} />
            {movies.length < 1 && (
                <Alert variant="info">
                    You do not have any bookmarked movies yet
                </Alert>
            )}
        </section>
    );
};

export default BookmarkedMovies;
