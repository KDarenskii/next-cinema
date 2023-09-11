import { Metadata, NextPage } from "next";

import React from "react";

import { Movies } from "@/components/screens/movies/Movies";
import { Search } from "@/components/ui/Search";

import MoviesService from "@/services/Movies.service";

import styles from "./page.module.scss";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: "Next Cinema | Movies",
    description: "Movies of all genres and countries in one place",
};

interface Props {
    searchParams: {
        query?: string;
        with_genres?: string;
        year?: string;
        sort_by?: string;
    };
}

const MoviesPage: NextPage<Props> = async ({
    searchParams: { query, with_genres, year, sort_by },
}) => {
    const currQuery = query ?? "";
    const currGenre = with_genres ?? null;
    const currYear = year ?? null;
    const currSort = sort_by ?? null;

    const moviesData = await MoviesService.get({
        query: currQuery,
        genre: currGenre,
        year: currYear,
        sort: currSort,
    });
    const genresData = await MoviesService.getGenres();

    return (
        <>
            <Search className={styles.search} />
            <Movies moviesData={moviesData} genresData={genresData} />
        </>
    );
};

export default MoviesPage;
