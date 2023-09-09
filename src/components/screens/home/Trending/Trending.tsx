"use client";

import { FC } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";

import { SectionTitle } from "@/components/SectionTitle";
import { TrendCard } from "@/components/cards/TrendCard";

import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

import { sliderProps } from "./slider.config";
import styles from "./trending.module.scss";
import useTrending from "./useTrending";

interface Props {
    trendsData: BaseGetResponse<IMotion[]>;
}

const Trending: FC<Props> = ({ trendsData }) => {
    const { data: trends } = useTrending(trendsData);

    return (
        <section>
            <SectionTitle className="visually-hidden">Trending</SectionTitle>
            <Swiper {...sliderProps}>
                {trends.map((trend) => {
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
