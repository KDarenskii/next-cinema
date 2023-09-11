import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import MoviesService from "@/services/Movies.service";

import { IMovie } from "@/types/movie.interface";
import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

const useMovies = (initialData: BaseGetResponse<IMovie[]>) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const search = searchParams.get("query") ?? "";
    const page = searchParams.get("page") ?? "1";

    const [movies, setMovies] = useState<IMovie[]>(initialData.results);

    const query = useQuery(
        ["movies", page, search],
        () => MoviesService.get(Number(page), search),
        {
            initialData,
            onSuccess: (data) => handleSuccess(data),
        },
    );

    const handleSuccess = (data: BaseGetResponse<IMovie[]>) => {
        if (data.page === 1) {
            setMovies(data.results);
        } else {
            setMovies((movies) => movies.concat(data.results));
        }
    };

    const handleChangePage = () => {
        const newParams = new URLSearchParams(searchParams.toString());
        const currPage = newParams.get("page") ?? "1";
        const nextPage = String(Number(currPage) + 1);
        newParams.set("page", nextPage);
        router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
    };

    const { data, isError } = query;

    const hasMore = data.results.length < data.totalResults;
    const dataLength = movies.length;

    return { movies, handleChangePage, hasMore, dataLength, isError };
};

export default useMovies;
