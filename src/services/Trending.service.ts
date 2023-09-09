import api from "@/api";

import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";

class TrendingService {
    static get = async () => {
        const response = await api.get<BaseGetResponse<IMotion[]>>(
            "/trending/all/day",
            {
                headers: { accept: "application/json" },
            },
        );
        return response.data;
    };
}

export default TrendingService;
