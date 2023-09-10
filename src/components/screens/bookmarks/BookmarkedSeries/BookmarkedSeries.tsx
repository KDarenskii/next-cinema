"use client";

import { FC } from "react";

import { MediaList } from "@/components/MediaList";
import { SectionTitle } from "@/components/SectionTitle";

import { selectBookmarksList } from "@/store/bookmarks/selectors";

import useTypedSelector from "@/hooks/useTypedSelector";

import styles from "./bookmarkedSeries.module.scss";

const BookmarkedSeries: FC = () => {
    const { series } = useTypedSelector(selectBookmarksList);

    return (
        <section>
            <SectionTitle className={styles.title}>
                Bookmarked TV series
            </SectionTitle>
            <MediaList mediaList={series} />
        </section>
    );
};

export default BookmarkedSeries;
