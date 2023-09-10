import { ISeries } from "@/types/motion.interface";
import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

import api from "@/api";

class SeriesService {
    static get = async (page: number = 1) => {
        const response = await api.get<BaseGetResponse<ISeries[]>>(
            "/tv/popular",
            {
                params: { page },
                headers: { accept: "application/json" },
            },
        );
        return response.data;
    };
}

export default SeriesService;
