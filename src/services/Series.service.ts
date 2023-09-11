import { IActor } from "@/types/actor.interface";
import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";
import { GetCastResponse } from "@/types/response/getCastResponse.interface";
import { ISeries } from "@/types/series.interface";
import { ISeriesDetails } from "@/types/seriesDetails.interface";

import api from "@/api";

class SeriesService {
    static get = async (page: number = 1, query: string = "") => {
        const url = query ? `/search/tv` : "/tv/popular";
        const response = await api.get<BaseGetResponse<ISeries[]>>(url, {
            params: { page },
            headers: { accept: "application/json" },
        });
        return response.data;
    };

    static getDetails = async (id: number | string) => {
        const response = await api.get<ISeriesDetails>(`/tv/${id}`, {
            headers: { accept: "application/json" },
        });
        return response.data;
    };

    static getCast = async (id: number | string) => {
        const response = await api.get<GetCastResponse<IActor[]>>(
            `/tv/${id}/credits`,
            {
                headers: { accept: "application/json" },
            },
        );

        return response.data.cast;
    };
}

export default SeriesService;
