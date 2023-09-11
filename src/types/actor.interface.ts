export interface IActor {
    adult: boolean;
    gender: number;
    id: number;
    knownForDepartment: string;
    name: string;
    originalName: string;
    popularity: number;
    profilePath: string;
    character: string;
    creditId: string;
    order: number;
}

export interface IMovieActor extends IActor {
    castId: number;
}
