import { FC } from "react";

import { MovieCard } from "../cards/MovieCard";
import styles from "./mediaList.module.scss";

interface Props {
    mediaList: IMotion[];
}

const MediaList: FC<Props> = ({ mediaList }) => {
    return (
        <ul className={styles.list}>
            {mediaList.map((media) => {
                const date = media.releaseDate ?? media.firstAirDate ?? null;
                const year = date ? date.split("-")[0] : null;
                return (
                    <MovieCard
                        rating={media.voteAverage}
                        src={media.backdropPath}
                        title={media.originalTitle}
                        year={year}
                        mediaType={media.mediaType}
                        key={media.id}
                    />
                );
            })}
        </ul>
    );
};

export default MediaList;
