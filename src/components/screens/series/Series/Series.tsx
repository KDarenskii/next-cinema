"use client";

import { FC } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { MediaList } from "@/components/MediaList";
import { SectionTitle } from "@/components/SectionTitle";
import { CircleLoader } from "@/components/ui/CircleLoader";
import { EndListMessage } from "@/components/ui/EndListMessage";

import { ISeries } from "@/types/motion.interface";
import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

import styles from "./series.module.scss";
import useSeries from "./useSeries";

interface Props {
    seriesData: BaseGetResponse<ISeries[]>;
}

const Series: FC<Props> = ({ seriesData }) => {
    const { dataLength, hasMore, series, changePage } = useSeries(seriesData);

    return (
        <section>
            <SectionTitle className={styles.title}>TV Series</SectionTitle>
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
                <MediaList mediaList={series} />
            </InfiniteScroll>
        </section>
    );
};

export default Series;
