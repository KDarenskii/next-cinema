import { NextPage } from "next";

import React from "react";

import { MovieDescription } from "@/components/screens/movieDetails/MovieDescription";

import MoviesService from "@/services/Movies.service";

import styles from "./page.module.scss";

interface Props {
    params: {
        id: string;
    };
}

const MovieDetailsPage: NextPage<Props> = async ({ params: { id } }) => {
    const details = await MoviesService.getDetails(id);
    const cast = await MoviesService.getCast(id);

    return (
        <div className={styles.page}>
            <MovieDescription details={details} cast={cast} />
        </div>
    );
};

export default MovieDetailsPage;
