import { Metadata, NextPage } from "next";

import React from "react";

import { Search } from "@/components/Search";
import { Movies } from "@/components/screens/movies/Movies";

import MoviesService from "@/services/Movies.service";

import styles from "./page.module.scss";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "Next Cinema | Movies",
    description: "Movies of all genres and countries in one place",
};

interface Props {
    searchParams: {
        page?: string;
        query?: string;
    };
}

const MoviesPage: NextPage<Props> = async ({
    searchParams: { page, query },
}) => {
    const currPage = page ? Number(page) : 1;
    const currQuery = query ?? "";

    console.log(currPage);
    console.log(currQuery);

    const moviesData = await MoviesService.get(currPage, currQuery);

    return (
        <>
            <Search className={styles.search} />
            <Movies moviesData={moviesData} />
        </>
    );
};

export default MoviesPage;
