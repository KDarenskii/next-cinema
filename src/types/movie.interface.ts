import { MotionBase } from "./motionBase.interface";

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
