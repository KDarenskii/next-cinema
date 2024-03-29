"use client";

import { FC } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";

import { SectionTitle } from "@/components/SectionTitle";
import { TrendCard } from "@/components/cards/TrendCard";

import { IMovie } from "@/types/movie.interface";
import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

import { sliderProps } from "./slider.config";
import styles from "./trending.module.scss";
import useTrending from "./useTrending";

interface Props {
    trendsData: BaseGetResponse<IMovie[]>;
}

const Trending: FC<Props> = ({ trendsData }) => {
    const { data: trends } = useTrending(trendsData);

    return (
        <section>
            <SectionTitle className="visually-hidden">Trending</SectionTitle>
            <Swiper {...sliderProps}>
                {trends.map((trend) => {
                    const year = trend.releaseDate.split("-")[0];
                    return (
                        <SwiperSlide key={trend.id} className={styles.card}>
                            <TrendCard
                                className={styles.card}
                                detailsClassName={styles.details}
                                mediaName="Movie"
                                rating={trend.voteAverage}
                                overview={trend.overview}
                                src={trend.posterPath}
                                year={year}
                                id={trend.id}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
};

export default Trending;
