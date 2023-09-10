import { IMovie } from "@/types/motion.interface";
import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

import api from "@/api";

class TrendingService {
    static get = async () => {
        const response = await api.get<BaseGetResponse<IMovie[]>>(
            "/trending/movie/day",
            {
                headers: { accept: "application/json" },
            },
        );
        return response.data;
    };
}

export default TrendingService;
