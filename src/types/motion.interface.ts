interface MotionBase {
    backdropPath: string;
    genreIds: number[];
    id: number;
    originalLanguage: string;
    overview: string;
    popularity: number;
    posterPath: string;
    voteAverage: number;
    voteCount: number;
}

export interface ISeries extends MotionBase {
    name: string;
    originCountry: string[];
    originalName: string;
    firstAirDate?: string;
}

export interface IMovie extends MotionBase {
    title: string;
    originalTitle: string;
    video: boolean;
    releaseDate: string;
    adult: boolean;
}

export interface ITrendMovie extends IMovie {
    mediaType: "movie";
}

export type TMotion = IMovie | ISeries;
