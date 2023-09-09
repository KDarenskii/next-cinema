import { NextPage } from "next";

import React from "react";

import { Movies } from "@/components/screens/movies/Movies";

import MoviesService from "@/services/Movies.service";

export const revalidate = 3600;

const MoviesPage: NextPage = async () => {
    const moviesData = await MoviesService.get();

    return (
        <>
            <Movies moviesData={moviesData} />
        </>
    );
};

export default MoviesPage;
