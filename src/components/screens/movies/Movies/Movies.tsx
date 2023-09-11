"use client";

import { FC } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { MediaList } from "@/components/MediaList";
import { SectionTitle } from "@/components/SectionTitle";
import { Alert } from "@/components/ui/Alert";
import { CircleLoader } from "@/components/ui/CircleLoader";
import { EndListMessage } from "@/components/ui/EndListMessage";

import { IMovie } from "@/types/movie.interface";
import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

import styles from "./movies.module.scss";
import useMovies from "./useMovies";

interface Props {
    moviesData: BaseGetResponse<IMovie[]>;
}

const Movies: FC<Props> = ({ moviesData }) => {
    const { handleChangePage, dataLength, hasMore, movies, isError } =
        useMovies(moviesData);

    return (
        <section>
            <SectionTitle className={styles.title}>Movies</SectionTitle>
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
                    <MediaList mediaList={movies} />
                </InfiniteScroll>
            )}
        </section>
    );
};

export default Movies;
