"use client";

import { FC } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { MediaList } from "@/components/MediaList";
import { SectionTitle } from "@/components/SectionTitle";
import { CircleLoader } from "@/components/ui/CircleLoader";
import { EndListMessage } from "@/components/ui/EndListMessage";

import { IMovie } from "@/types/motion.interface";
import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

import styles from "./movies.module.scss";
import useMovies from "./useMovies";

interface Props {
    moviesData: BaseGetResponse<IMovie[]>;
}

const Movies: FC<Props> = ({ moviesData }) => {
    const { changePage, dataLength, hasMore, movies } = useMovies(moviesData);

    return (
        <section>
            <SectionTitle className={styles.title}>Movies</SectionTitle>
            <InfiniteScroll
                next={changePage}
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
        </section>
    );
};

export default Movies;
