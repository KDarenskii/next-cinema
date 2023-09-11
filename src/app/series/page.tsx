import { Metadata, NextPage } from "next";

import React from "react";

import { Search } from "@/components/Search";
import { Series } from "@/components/screens/series/Series";

import SeriesService from "@/services/Series.service";

import styles from "./layout.module.scss";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "Next Cinema | TV Series",
    description: "TV series of all genres and countries in one place",
};

const SeriesPage: NextPage = async () => {
    const seriesData = await SeriesService.get();

    return (
        <>
            <Search className={styles.search} />
            <Series seriesData={seriesData} />
        </>
    );
};

export default SeriesPage;
