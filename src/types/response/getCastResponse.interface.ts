import { ICrew } from "../crew.interface";

export interface GetCastResponse<T> {
    id: number;
    cast: T;
    crew: ICrew[];
}
