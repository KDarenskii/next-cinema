import { FC } from "react";

import useBookmark from "@/hooks/useBookmark";

import imageApiUrl from "@/utils/imageApiUrl";

import { IMovie, ISeries } from "@/types/motion.interface";

import { MotionCard } from "../cards/MotionCard";

import styles from "./mediaList.module.scss";

interface Props {
    mediaList: IMovie[] | ISeries[];
}

const MediaList: FC<Props> = ({ mediaList }) => {
    return (
        <ul className={styles.list}>
            {mediaList.map((media) =>
                "video" in media ? (
                    <MovieCard movie={media} key={media.id} />
                ) : (
                    <SerialsCard series={media} key={media.id} />
                ),
            )}
        </ul>
    );
};

export default MediaList;

function MovieCard({ movie }: { movie: IMovie }) {
    const { voteAverage, backdropPath, title, releaseDate } = movie;

    const { toggleBookmark, isBookmarked } = useBookmark(movie);

    const year = releaseDate.split("-")[0];

    return (
        <MotionCard
            rating={Number(voteAverage.toFixed(1))}
            src={imageApiUrl(backdropPath, "w780")}
            onBookmarkClick={toggleBookmark}
            isBookmarked={isBookmarked}
            mediaName="Movie"
            title={title}
            year={year}
        />
    );
}

function SerialsCard({ series }: { series: ISeries }) {
    const { voteAverage, backdropPath, name, firstAirDate } = series;

    const year = firstAirDate?.split("-")[0] ?? "";

    const { toggleBookmark, isBookmarked } = useBookmark(series);

    return (
        <MotionCard
            rating={Number(voteAverage.toFixed(1))}
            src={imageApiUrl(backdropPath, "w780")}
            onBookmarkClick={toggleBookmark}
            isBookmarked={isBookmarked}
            mediaName="TV Series"
            title={name}
            year={year}
        />
    );
}
