import { FC } from "react";

import useBookmark from "@/hooks/useBookmark";

import imageApiUrl from "@/utils/imageApiUrl";

import { IMovie } from "@/types/movie.interface";
import { ISeries } from "@/types/series.interface";

import { MOVIES_ROUTE, SERIES_ROUTE } from "@/constants/routesPathnames";

import { MotionCard } from "../cards/MotionCard";

import styles from "./mediaList.module.scss";

interface Props {
    mediaList: IMovie[] | ISeries[];
    isFetching?: boolean;
}

const MediaList: FC<Props> = ({ mediaList, isFetching }) => {
    return (
        <ul className={styles.list}>
            {mediaList.map((media) =>
                "video" in media ? (
                    <MovieCard
                        movie={media}
                        key={media.id}
                        isFetching={isFetching}
                    />
                ) : (
                    <SerialsCard series={media} key={media.id} />
                ),
            )}
        </ul>
    );
};

export default MediaList;

function MovieCard({
    movie,
    isFetching,
}: {
    movie: IMovie;
    isFetching?: boolean;
}) {
    const { voteAverage, backdropPath, title, releaseDate, id } = movie;

    const { toggleBookmark, isBookmarked } = useBookmark(movie);

    const year = releaseDate.split("-")[0];

    return (
        <MotionCard
            rating={Number(voteAverage.toFixed(1))}
            src={imageApiUrl(backdropPath, "w780")}
            onBookmarkClick={toggleBookmark}
            href={`${MOVIES_ROUTE}/${id}`}
            isBookmarked={isBookmarked}
            isFetching={isFetching}
            mediaName="Movie"
            title={title}
            year={year}
        />
    );
}

function SerialsCard({
    series,
    isFetching,
}: {
    series: ISeries;
    isFetching?: boolean;
}) {
    const { voteAverage, backdropPath, name, firstAirDate, id } = series;

    const year = firstAirDate?.split("-")[0] ?? "";

    const { toggleBookmark, isBookmarked } = useBookmark(series);

    return (
        <MotionCard
            rating={Number(voteAverage.toFixed(1))}
            src={imageApiUrl(backdropPath, "w780")}
            onBookmarkClick={toggleBookmark}
            isBookmarked={isBookmarked}
            isFetching={isFetching}
            href={`${SERIES_ROUTE}/${id}`}
            mediaName="TV Series"
            title={name}
            year={year}
        />
    );
}
