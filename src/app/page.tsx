import { NextPage } from "next";

import React from "react";

import { Trending } from "@/components/screens/home/Trending";

import TrendingService from "@/services/Trending.service";

export const revalidate = 3600;

const HomePage: NextPage = async () => {
    const trends = await TrendingService.get();
    // console.log(trends);

    return (
        <>
            <Trending trends={trends} />
        </>
    );
};

export default HomePage;
