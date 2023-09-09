"use client";

import { FC } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { MediaList } from "@/components/MediaList";
import { SectionTitle } from "@/components/SectionTitle";

import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

import styles from "./movies.module.scss";
import useMovies from "./useMovies";

interface Props {
    moviesData: BaseGetResponse<IMotion[]>;
}

const Movies: FC<Props> = ({ moviesData }) => {
    const { query, changePage } = useMovies(moviesData);

    const {
        data: { results, totalResult, page },
    } = query;

    return (
        <section>
            <SectionTitle className={styles.title}>Movies</SectionTitle>
            <InfiniteScroll
                next={() => changePage(page)}
                dataLength={results.length}
                hasMore={results.length < totalResult}
                style={{ overflow: "initial" }}
                loader={"loading..."}
            >
                <MediaList mediaList={results} />
            </InfiniteScroll>
        </section>
    );
};

export default Movies;
