import { useQuery } from "@tanstack/react-query";

import TrendingService from "@/services/Trending.service";

import { ITrendingGetResponse } from "@/types/response/trending/getResponse.interface";

const useTrending = (initialData: ITrendingGetResponse) => {
    const { data } = useQuery(["posts"], TrendingService.get, {
        initialData,
        select: ({ results }) => results,
    });

    return { data };
};

export default useTrending;
