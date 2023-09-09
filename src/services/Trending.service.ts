import api from "@/api";

import { ITrendingGetResponse } from "@/types/response/trending/getResponse.interface";

class TrendingService {
    static get = async () => {
        const response = await api.get<ITrendingGetResponse>(
            "/trending/all/day",
            {
                headers: { accept: "application/json" },
            },
        );
        return response.data;
    };
}

export default TrendingService;
