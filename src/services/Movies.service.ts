import api from "@/api";
import { IMovie } from "@/types/motion.interface";

import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

class MoviesService {
    static get = async (page: number = 1) => {
        const response = await api.get<BaseGetResponse<IMovie[]>>(
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
