import { IMovieActor } from "@/types/actor.interface";
import { IGenre } from "@/types/genre.interface";
import { IMovie } from "@/types/movie.interface";
import { IMovieDetails } from "@/types/movieDetails.interface";
import { BaseGetResponse } from "@/types/response/baseGetResponse.interface";
import { GetCastResponse } from "@/types/response/getCastResponse.interface";

import api from "@/api";

interface GetParams {
    page?: number | string | null;
    query?: string | null;
    genre?: string | null;
    year?: string | null;
    sort?: string | null;
}

class MoviesService {
    static get = async ({
        genre,
        page = 1,
        query,
        year,
        sort = "popularity.desc",
    }: GetParams) => {
        const url = query ? `/search/movie` : "/movie/popular";
        const response = await api.get<BaseGetResponse<IMovie[]>>(url, {
            params: { page, query, with_genres: genre, year, sort_by: sort },
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

    static getGenres = async () => {
        const response = await api.get<{ genres: IGenre[] }>(
            "/genre/movie/list",
            {
                headers: { accept: "application/json" },
            },
        );
        return response.data.genres;
    };
}

export default MoviesService;
