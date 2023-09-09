import { NextPage } from "next";

import React from "react";

import { Trending } from "@/components/screens/home/Trending";

import TrendingService from "@/services/Trending.service";

export const revalidate = 3600;

const HomePage: NextPage = async () => {
    const trendsData = await TrendingService.get();

    return (
        <>
            <Trending trendsData={trendsData} />
        </>
    );
};

export default HomePage;
