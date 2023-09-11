"use client";

import { FC } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { MediaList } from "@/components/MediaList";
import { SectionTitle } from "@/components/SectionTitle";
import { Alert } from "@/components/ui/Alert";
import { CircleLoader } from "@/components/ui/CircleLoader";
import { EndListMessage } from "@/components/ui/EndListMessage";
import { Select } from "@/components/ui/Select";

import { IGenre } from "@/types/genre.interface";
import { IMovie } from "@/types/movie.interface";
import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

import styles from "./movies.module.scss";
import useMovies from "./useMovies";

interface Props {
    moviesData: BaseGetResponse<IMovie[]>;
    genresData: IGenre[];
}

const Movies: FC<Props> = ({ moviesData, genresData }) => {
    const {
        handleChangePage,
        dataLength,
        hasMore,
        movies,
        isError,
        activeGenreOption,
        handleChangeGenre,
        genreOptions,
        activeYearOption,
        yearOptions,
        handleChangeYear,
        isFetching,
        activeSortOption,
        handleChangeSort,
        sortOptions,
    } = useMovies(moviesData, genresData);

    return (
        <section>
            <SectionTitle className={styles.title}>Movies</SectionTitle>
            <div className={styles.filter}>
                <Select
                    className={styles.select}
                    options={genreOptions}
                    value={activeGenreOption}
                    onChange={(option) => handleChangeGenre(option)}
                />
                <Select
                    className={styles.select}
                    value={activeYearOption}
                    options={yearOptions}
                    onChange={(option) => handleChangeYear(option)}
                />
                <Select
                    className={styles.select}
                    value={activeSortOption}
                    options={sortOptions}
                    onChange={(option) => handleChangeSort(option)}
                />
            </div>
            {isError && <Alert variant="fail">Something went wrong</Alert>}
            {!isError && (
                <InfiniteScroll
                    next={handleChangePage}
                    dataLength={dataLength}
                    hasMore={hasMore}
                    style={{ overflow: "initial" }}
                    loader={<CircleLoader className={styles.loader} />}
                    endMessage={
                        <EndListMessage className={styles.message}>
                            There is no more content to show you ^_^
                        </EndListMessage>
                    }
                >
                    <MediaList mediaList={movies} isFetching={isFetching} />
                </InfiniteScroll>
            )}
        </section>
    );
};

export default Movies;
