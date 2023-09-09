import { NextPage } from "next";

import React from "react";

import { Series } from "@/components/screens/series/Series";

import SeriesService from "@/services/Series.service";

export const revalidate = 3600;

const SeriesPage: NextPage = async () => {
    const seriesData = await SeriesService.get();

    return (
        <>
            <Series seriesData={seriesData} />
        </>
    );
};

export default SeriesPage;
