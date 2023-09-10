import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import MoviesService from "@/services/Movies.service";

import { IMovie } from "@/types/motion.interface";
import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

const useMovies = (initialData: BaseGetResponse<IMovie[]>) => {
    const [movies, setMovies] = useState<IMovie[]>(initialData.results);
    const [page, setPage] = useState(1);

    const query = useQuery(["movies", page], () => MoviesService.get(page), {
        initialData,
        enabled: page !== 1,
        onSuccess: (data) => setMovies((movies) => movies.concat(data.results)),
    });

    const { data } = query;

    const changePage = () => {
        setPage(data.page + 1);
    };

    const hasMore = data.results.length < data.totalResults;
    const dataLength = movies.length;

    return { movies, changePage, hasMore, dataLength };
};

export default useMovies;
