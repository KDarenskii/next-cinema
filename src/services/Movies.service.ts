import api from "@/api";

import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

class MoviesService {
    static get = async (page: number = 1) => {
        const response = await api.get<BaseGetResponse<IMotion[]>>(
            "/movie/popular",
            {
                params: { page },
                headers: { accept: "application/json" },
            },
        );
        return response.data;
    };
}

export default MoviesService;
