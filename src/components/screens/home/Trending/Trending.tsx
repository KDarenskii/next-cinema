"use client";

import { FC } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";

import { TrendCard } from "@/components/TrendCard";
import Typography from "@/components/Typography/Typography";

import { ITrendingGetResponse } from "@/types/response/trending/getResponse.interface";

import { sliderProps } from "./slider.config";
import styles from "./trending.module.scss";
import useTrending from "./useTrending";

interface Props {
    trends: ITrendingGetResponse;
}

const Trending: FC<Props> = ({ trends }) => {
    const { data: trendsList } = useTrending(trends);

    return (
        <section>
            <Typography as="h1" className="visually-hidden">
                Trending
            </Typography>
            <Swiper {...sliderProps}>
                {trendsList.map((trend) => {
                    const date =
                        trend.releaseDate ?? trend.firstAirDate ?? null;
                    const year = date ? date.split("-")[0] : null;
                    return (
                        <SwiperSlide key={trend.id}>
                            <TrendCard
                                detailsClassName={styles.details}
                                mediaType={trend.mediaType}
                                rating={trend.voteAverage}
                                overview={trend.overview}
                                src={trend.posterPath}
                                isAdult={trend.adult}
                                year={year}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Trending;
