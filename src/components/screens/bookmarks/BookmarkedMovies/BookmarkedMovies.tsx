"use client";

import { FC } from "react";

import { MediaList } from "@/components/MediaList";
import { SectionTitle } from "@/components/SectionTitle";

import { selectBookmarksList } from "@/store/bookmarks/selectors";

import useTypedSelector from "@/hooks/useTypedSelector";

import styles from "./bookmarkedMovies.module.scss";

interface Props {
    className?: string;
}

const BookmarkedMovies: FC<Props> = ({ className }) => {
    const { movies } = useTypedSelector(selectBookmarksList);

    return (
        <section className={className}>
            <SectionTitle className={styles.title}>
                Bookmarked movies
            </SectionTitle>
            <MediaList mediaList={movies} />
        </section>
    );
};

export default BookmarkedMovies;
