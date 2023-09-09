import { FC } from "react";

import { MediaList } from "@/components/MediaList";
import { SectionTitle } from "@/components/SectionTitle";

import styles from "./bookmarkedMovies.module.scss";

interface Props {
    className?: string;
}

const BookmarkedMovies: FC<Props> = ({ className }) => {
    return (
        <section className={className}>
            <SectionTitle className={styles.title}>
                Bookmarked movies
            </SectionTitle>
            <MediaList mediaList={[]} />
        </section>
    );
};

export default BookmarkedMovies;
