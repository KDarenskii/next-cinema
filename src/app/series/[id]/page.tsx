import { Metadata, NextPage } from "next";

import React from "react";

import { SeriesDescription } from "@/components/screens/seriesDetails/SeriesDescription";

import SeriesService from "@/services/Series.service";

import styles from "./page.module.scss";

interface Props {
    params: {
        id: string;
    };
}

const SeriesDetailsPage: NextPage<Props> = async ({ params: { id } }) => {
    const details = await SeriesService.getDetails(id);
    const cast = await SeriesService.getCast(id);

    return (
        <div className={styles.page}>
            <SeriesDescription details={details} cast={cast} />
        </div>
    );
};

export default SeriesDetailsPage;
