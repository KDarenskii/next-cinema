import { useRouter, useSearchParams } from "next/navigation";

import { useQuery } from "@tanstack/react-query";

import SeriesService from "@/services/Series.service";

import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

const useSeries = (initialData: BaseGetResponse<IMotion[]>) => {
    const router = useRouter();

    const query = useQuery(["series"], () => SeriesService.get(), {
        initialData,
    });

    const changePage = (page: number) => {
        router.replace(`?page=${page}`);
    };

    return { query, changePage };
};

export default useSeries;
