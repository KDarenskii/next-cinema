import { FC } from "react";

import { MediaList } from "@/components/MediaList";
import { SectionTitle } from "@/components/SectionTitle";

import styles from "./bookmarkedMovies.module.scss";

const BookmarkedSeries: FC = () => {
    return (
        <section>
            <SectionTitle className={styles.title}>
                Bookmarked TV series
            </SectionTitle>
            <MediaList mediaList={[]} />
        </section>
    );
};

export default BookmarkedSeries;
