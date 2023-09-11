interface Genre {
    id: number;
    name: string;
}

interface Company {
    id: number;
    logoPath: string;
    name: string;
    originCountry: string;
}

interface Country {
    iso31661: string;
    name: string;
}

interface SpokenLanguage {
    englishName: string;
    iso6391: string;
    name: string;
}

export interface DetailsBase {
    id: number;
    adult: boolean;
    backdropPath: string;
    tagline: string;
    voteAverage: number;
    voteCount: number;
    genres: Genre[];
    homePage: string;
    originalLanguage: string;
    overview: string;
    popularity: number;
    posterPath: string;
    productionCompanies: Company[];
    productionCountries: Country[];
    spokenLanguages: SpokenLanguage[];
    status: string;
}
