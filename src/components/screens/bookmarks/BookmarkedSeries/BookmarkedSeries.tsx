"use client";

import { FC } from "react";

import { MediaList } from "@/components/MediaList";
import { SectionTitle } from "@/components/SectionTitle";
import { Alert } from "@/components/ui/Alert";

import { selectBookmarkedSeries } from "@/store/bookmarks/selectors";

import useTypedSelector from "@/hooks/useTypedSelector";

import styles from "./bookmarkedSeries.module.scss";

const BookmarkedSeries: FC = () => {
    const series = useTypedSelector(selectBookmarkedSeries);

    return (
        <section>
            <SectionTitle className={styles.title}>
                Bookmarked TV series
            </SectionTitle>
            <MediaList mediaList={series} />
            {series.length < 1 && (
                <Alert variant="info">
                    You do not have any bookmarked TV series yet
                </Alert>
            )}
        </section>
    );
};

export default BookmarkedSeries;
