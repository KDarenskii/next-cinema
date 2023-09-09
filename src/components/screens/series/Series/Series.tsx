"use client";

import { FC } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { MediaList } from "@/components/MediaList";
import { SectionTitle } from "@/components/SectionTitle";

import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

import styles from "./series.module.scss";
import useSeries from "./useSeries";

interface Props {
    seriesData: BaseGetResponse<IMotion[]>;
}

const Series: FC<Props> = ({ seriesData }) => {
    const { query, changePage } = useSeries(seriesData);

    const {
        data: { results, totalResult, page },
    } = query;

    return (
        <section>
            <SectionTitle className={styles.title}>TV Series</SectionTitle>
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

export default Series;
