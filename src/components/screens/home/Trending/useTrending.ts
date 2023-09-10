import { useQuery } from "@tanstack/react-query";

import TrendingService from "@/services/Trending.service";

import { IMovie } from "@/types/motion.interface";
import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

const useTrending = (initialData: BaseGetResponse<IMovie[]>) => {
    return useQuery(["posts"], TrendingService.get, {
        initialData,
        select: ({ results }) => results,
    });
};

export default useTrending;
