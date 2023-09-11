import { DetailsBase } from "./details.interface";

export interface IMovieDetails extends DetailsBase {
    belongsToCollection: string;
    budget: number;
    imdbId: string;
    originalTitle: string;
    releaseDate: string;
    revenue: number;
    runtime: number;
    title: string;
    video: boolean;
}
