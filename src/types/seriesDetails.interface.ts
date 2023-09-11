import { DetailsBase } from "./details.interface";
import { ISeason } from "./season.interface";

interface Creator {
    id: number;
    creditId: string;
    name: string;
    gender: number;
    profilePath: string;
}

interface Network {
    id: number;
    logoPath: string;
    name: string;
    originCountry: number;
}

export interface ISeriesDetails extends DetailsBase {
    name: string;
    createdBy: Creator[];
    episodeRunTime: number[];
    nextEpisodeToAir: string;
    firstAirDate: string;
    lastAirDate: string;
    lastEpisodeToAir: string;
    inProduction: boolean;
    languages: string[];
    networks: Network[];
    numberOfEpisodes: number;
    numberOfSeasons: number;
    originCountry: string[];
    originalName: string;
    seasons: ISeason[];
    type: string;
}
