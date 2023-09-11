import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useState } from "react";

import { useQuery } from "@tanstack/react-query";

import SeriesService from "@/services/Series.service";

import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";
import { ISeries } from "@/types/series.interface";

export const useSeries = (initialData: BaseGetResponse<ISeries[]>) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const search = searchParams.get("query") ?? "";
    const page = searchParams.get("page") ?? "1";

    const [series, setSeries] = useState<ISeries[]>(initialData.results);

    const query = useQuery(
        ["series", page, search],
        () => SeriesService.get(Number(page), search),
        {
            initialData,
            onSuccess: (data) => handleSuccess(data),
        },
    );

    const handleSuccess = (data: BaseGetResponse<ISeries[]>) => {
        if (data.page === 1) {
            setSeries(data.results);
        } else {
            setSeries((movies) => movies.concat(data.results));
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
    const dataLength = series.length;

    return { series, handleChangePage, hasMore, dataLength, isError };
};
