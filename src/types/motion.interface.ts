interface IMotion {
    adult: boolean;
    backdropPath: string;
    id: number;
    title: string;
    originalLanguage: string;
    originalTitle: string;
    overview: string;
    posterPath: string;
    mediaType: "movie" | "tv";
    genreIds: number[];
    popularity: number;
    firstAirDate?: string;
    releaseDate?: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}
