import { useRouter, useSearchParams } from "next/navigation";

import { useQuery } from "@tanstack/react-query";

import MoviesService from "@/services/Movies.service";

import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

const useMovies = (initialData: BaseGetResponse<IMotion[]>) => {
    const router = useRouter();

    const query = useQuery(["movies"], () => MoviesService.get(), {
        initialData,
    });

    const changePage = (page: number) => {
        router.replace(`?page=${page}`);
    };

    return { query, changePage };
};

export default useMovies;
