import { IMovieActor } from "@/types/actor.interface";
import { IMovie } from "@/types/movie.interface";
import { IMovieDetails } from "@/types/movieDetails.interface";
import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";
import { GetCastResponse } from "@/types/response/getCastResponse.interface";

import api from "@/api";

class MoviesService {
    static get = async (page: number = 1, query: string = "") => {
        const url = query ? `/search/movie` : "/movie/popular";
        const response = await api.get<BaseGetResponse<IMovie[]>>(url, {
            params: { page, query },
            headers: { accept: "application/json" },
        });
        return response.data;
    };

    static getDetails = async (id: number | string) => {
        const response = await api.get<IMovieDetails>(`/movie/${id}`, {
            headers: { accept: "application/json" },
        });
        return response.data;
    };

    static getCast = async (id: number | string) => {
        const response = await api.get<GetCastResponse<IMovieActor[]>>(
            `/movie/${id}/credits`,
            {
                headers: { accept: "application/json" },
            },
        );

        return response.data.cast;
    };
}

export default MoviesService;
