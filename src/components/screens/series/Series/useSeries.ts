import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import SeriesService from "@/services/Series.service";

import { ISeries } from "@/types/motion.interface";
import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

const useSeries = (initialData: BaseGetResponse<ISeries[]>) => {
    const [series, setSeries] = useState<ISeries[]>(initialData.results);
    const [page, setPage] = useState(1);

    const query = useQuery(["series", page], () => SeriesService.get(page), {
        initialData,
        enabled: page !== 1,
        onSuccess: (data) => setSeries((series) => series.concat(data.results)),
    });

    const { data } = query;

    const changePage = () => {
        setPage(data.page + 1);
    };

    const hasMore = data.results.length < data.totalResults;
    const dataLength = series.length;

    return { series, changePage, hasMore, dataLength };
};

export default useSeries;
